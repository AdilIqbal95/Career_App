from django.contrib.auth import login
from django.urls import path
from django.contrib.auth import views as auth_views
from . import views

app_name = 'users'
urlpatterns = [
    path('users/', views.users, name='index'),
    path('users/<int:id>', views.user, name='show'),
    path('users/<int:id>/applications', views.user_applications, name='applications'),
    path("login/", auth_views.LoginView.as_view(template_name='login.html'), name='login'),
    path("logout/", auth_views.LogoutView.as_view(template_name='logout.html'), name='logout'),
    path("register/", views.register, name='register'),
]


