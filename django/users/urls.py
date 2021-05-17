from os import name
from django import urls
from django.contrib.auth import login
from django.urls import include,path
from django.contrib.auth import views as auth_views
from . import views

from rest_framework_nested import routers
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet, basename='user')

applications_router = routers.NestedSimpleRouter(router, r'users', lookup='user')
applications_router.register(r'applications', views.ApplicationViewSet, basename='user-applications')
rewards_router = routers.NestedSimpleRouter(router, r'users', lookup='user')
rewards_router.register(r'rewards', views.UserRewardViewSet, basename='user-rewards')

urlpatterns = [
    path("users/register/", views.AuthViewSet.as_view({'post': 'create'}), name="user-register"),
    path('users/login/', TokenObtainPairView.as_view(), name='token-access'),
    path('users/refresh-token/', TokenRefreshView.as_view(), name='token-refresh'),
    path("", include(router.urls)),
    path("", include(applications_router.urls)),
    path("", include(rewards_router.urls)),
    path("users/<pk>/profile/", views.ProfileViewSet.as_view({'get': 'retrieve', 'put': 'update'}), name='user-profile'),
]


