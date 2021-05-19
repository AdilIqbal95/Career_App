from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions
from django.conf import settings
import requests

class ListJobs(APIView):
    """
    List jobs from the Indeed API
    """
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        p = request.query_params

        auth = requests.auth.HTTPBasicAuth(settings.REED_API_KEY, '')
        r = requests.get(f"https://www.reed.co.uk/api/1.0/search?keywords={p.get('keywords')}", auth=auth)
        data = r.json()

        return Response(data)
