from django import urls
from django.contrib.auth import login
from django.urls import include,path
from django.contrib.auth import views as auth_views
from . import views

from rest_framework_nested import routers

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet, basename='user')

applications_router = routers.NestedSimpleRouter(router, r'users', lookup='user')
applications_router.register(r'applications', views.ApplicationViewSet, basename='user-applications')


urlpatterns = [
    path("", include(router.urls)),
    path("", include(applications_router.urls)),
    path("users/<pk>/profile", views.ProfileViewSet.as_view({'get': 'retrieve', 'put': 'update'}), name='user-profile'),
    path("auth", include("rest_framework.urls", namespace="rest_framework"))
]


