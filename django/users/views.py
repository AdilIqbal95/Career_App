# from django.contrib.auth.models import User, Group
from django.conf import settings
from django.shortcuts import get_object_or_404, redirect
from rest_framework.response import Response
from rest_framework import status
from rest_framework import mixins, request, views, viewsets, permissions

from datetime import datetime, timedelta

from .models import Application, Profile, User, UserReward
from .serializers import ProfileSerializer, UserRewardSerializer, UserSerializer, ApplicationSerializer


class AuthViewSet(viewsets.GenericViewSet, mixins.CreateModelMixin):
    """
    API endpoint that allows users to be registered
    """
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]


class UserViewSet(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin, mixins.UpdateModelMixin):
    """
    API endpoint that allows users to be viewed or edited.
    """

    def update(self, request, *args, **kwargs):
        kwargs['partial'] = True
        return super().update(request, *args, **kwargs)

    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class ProfileViewSet(viewsets.GenericViewSet, mixins.RetrieveModelMixin, mixins.UpdateModelMixin):
    """
    API endpoint that allows a users profile to be viewed or edited.
    """

    def get_queryset(self):
        return Profile.objects.filter(user=self.kwargs['pk'])

    def update(self, request, *args, **kwargs):
        kwargs['partial'] = True
        return super().update(request, *args, **kwargs)

    serializer_class = ProfileSerializer
    permission_classes = [permissions.IsAuthenticated]


class ApplicationViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows user applications to be viewed or edited.
    """

    def get_queryset(self):
        print(Application.objects.filter(user=self.kwargs['user_pk']))
        return Application.objects.filter(user=self.kwargs['user_pk'])

    def perform_create(self, serializer):
        """
            Add reward to user and update their points
        """
        print(self.kwargs['user_pk'])
        user = get_object_or_404(User, pk=self.kwargs['user_pk'])
        serializer.save(user=user)

    def update(self, request, *args, **kwargs):
        kwargs['partial'] = True
        return super().update(request, *args, **kwargs)

    serializer_class = ApplicationSerializer
    permission_classes = [permissions.IsAuthenticated]


class UserRewardViewSet(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.CreateModelMixin):
    """
    API endpoint that allows user rewards to be added and edited.
    """

    def get_queryset(self):
        return UserReward.objects.filter(user=self.kwargs['pk'])

    def create(self, request, *args, **kwargs):
        """
            Add reward to user if it can be claimed 
        """
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        reward = serializer.validated_data.get("reward")
        user_rewards = self.get_queryset()

        if(reward.one_time and user_rewards.filter(reward=reward).exists()):
            return Response({'detail': 'Reward can only be claimed once'},  status=status.HTTP_406_NOT_ACCEPTABLE)
        elif (reward.title == "Daily Reward"):
            dailys = user_rewards.filter(reward=reward)
            is_valid = dailys.count() == 0 or datetime.date(datetime.now()) < (
                dailys.order_by('-date_claimed')[0].date_claimed - timedelta(days=1))
            if (is_valid):
                self.perform_create(serializer)
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response({'detail': 'Cannot claim daily reward yet.'},  status=status.HTTP_406_NOT_ACCEPTABLE)
        else:
            try:
                self.perform_create(serializer)
                headers = self.get_success_headers(serializer.data)
                return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
            except:
                return Response({'detail': 'Not enough points to claim reward.'},  status=status.HTTP_406_NOT_ACCEPTABLE)

    def perform_create(self, serializer):
        """
            Add reward to user and update their points
        """
        user = get_object_or_404(Profile, user=self.kwargs['pk'])
        reward = serializer.validated_data.get("reward")
        points = reward.point_change
        user.points += points
        
        if (reward.title == "Daily Reward"):
            user.daily_streak += 1
        user.save()
        serializer.save(user=user)
    
    serializer_class = UserRewardSerializer
    permission_classes = [permissions.IsAuthenticated]
