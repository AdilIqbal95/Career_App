
from django import urls
from . import views
from django.urls import include,path
from rest_framework_nested import routers


router = routers.DefaultRouter()
router.register(r'rewards', views.RewardViewSet, basename='reward')

urlpatterns = [
    path("", include(router.urls)),
]


