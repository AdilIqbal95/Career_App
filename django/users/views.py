# from django.contrib.auth.models import User, Group
from django.shortcuts import get_object_or_404, redirect
from .models import Application, Profile, User, UserReward
from rest_framework import mixins, request, views, viewsets, permissions
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

class UserRewardViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows user rewards to be added and edited.
    """
    def get_queryset(self):
        user = Profile.objects.get(pk=self.kwargs['user_pk'])
        return user.rewards.all()

    serializer_class = RewardSerializer
    permission_classes = [permissions.IsAuthenticated]
