# from django.contrib.auth.models import User, Group
from django.shortcuts import get_object_or_404, redirect
from rest_framework.response import Response
from rest_framework import status
from rest_framework import mixins, request, views, viewsets, permissions

from .models import Application, Profile, User, UserReward
from .serializers import ProfileSerializer, UserRewardSerializer, UserSerializer, ApplicationSerializer

class AuthViewSet(viewsets.GenericViewSet, mixins.CreateModelMixin):
    """
    API endpoint that allows users to be registered
    """
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]


class UserViewSet(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

class ProfileViewSet(viewsets.GenericViewSet, mixins.RetrieveModelMixin, mixins.UpdateModelMixin):
    """
    API endpoint that allows a users profile to be viewed or edited.
    """

    def get_queryset(self):
        return Profile.objects.filter(pk=self.kwargs['pk'])

    serializer_class = ProfileSerializer
    permission_classes = [permissions.IsAuthenticated]


class ApplicationViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows user applications to be viewed or edited.
    """

    def get_queryset(self):
        return Application.objects.filter(user_profile=self.kwargs['user_pk'])

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
        else:
            self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)        

    def perform_create(self, serializer):
        """
            Add reward to user and update their points
        """
        user = get_object_or_404(Profile, user=self.kwargs['pk'])
        reward = serializer.validated_data.get("reward")
        points = reward.point_change
        user.points += points
        user.save()
        serializer.save(user=user)

    serializer_class = UserRewardSerializer
    permission_classes = [permissions.IsAuthenticated]
