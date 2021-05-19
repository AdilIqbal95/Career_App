from . import views
from django.urls import include,path
from rest_framework_nested import routers


urlpatterns = [
    path("jobs", views.ListJobs.as_view()),
]


