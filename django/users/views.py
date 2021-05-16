from django.contrib.auth.models import User, Group
from django.shortcuts import redirect
from .models import Application, Profile
from rest_framework import mixins, viewsets, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from .serializers import ProfileSerializer, UserSerializer, GroupSerializer, ApplicationSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    # @action(detail=True)


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]


class ProfileViewSet(viewsets.GenericViewSet, mixins.RetrieveModelMixin, mixins.UpdateModelMixin):
    """
    API endpoint that allows a users profile to be viewed or edited.
    """

    def get_queryset(self):
        print(self.kwargs)
        return Profile.objects.filter(pk=self.kwargs['pk'])
            
    serializer_class = ProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

class ApplicationViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows user applications to be viewed or edited.
    """
    def get_queryset(self):
        print(self.kwargs)
        return Application.objects.filter(user_profile=self.kwargs['user_pk'])

    serializer_class = ApplicationSerializer
    permission_classes = [permissions.IsAuthenticated]
