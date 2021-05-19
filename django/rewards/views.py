from .models import Reward
from rest_framework import viewsets, permissions
from .serializers import RewardSerializer

class RewardViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows rewards to viewed or created/edited by admins
    """
    def get_permissions(self):
        if(self.action == 'list'):
            return [permissions.IsAuthenticated()]
        else:
            return [permissions.IsAdminUser()]

    queryset = Reward.objects.all()
    serializer_class = RewardSerializer
