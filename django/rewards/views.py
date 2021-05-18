from .models import Reward
from rest_framework import viewsets, permissions
from .serializers import RewardSerializer

class RewardViewSet(viewsets.ModelViewSet):
    """
    Admin API endpoint that allows rewards to viewed and edited
    """
    queryset = Reward.objects.all()
    serializer_class = RewardSerializer
    permission_classes = [permissions.IsAdminUser]
