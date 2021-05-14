from django.core import serializers
from django.http.response import JsonResponse
from django.shortcuts import render, redirect
from django.urls import reverse
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from .forms import UserRegistrationForm
from .models import User, Profile, Application

def index(req):
    return render(req, 'base.html') 

def register(req):
    if req.method == 'POST':
        form = UserRegistrationForm(req.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(
                req, f'ACCESS ISSUED: User {username} granted Level 1 access.')        
            return redirect('app-index')
    else:
        form = UserRegistrationForm()
    
    return render(req, 'register.html', {'form': form})

@login_required
def users(req):
    if req.method == 'GET':
        try:
            users = User.objects.all().values()
            return JsonResponse(list(users), safe=False)
        except Exception:
            return JsonResponse({'err': 'Could not retrieve users.'})
    elif req.method == 'POST':
        try:
            user = User.objects.create(req.POST)
            return JsonResponse(user)
        except Exception:
            return JsonResponse({'err': 'Could not create new user.'})



# @login_required
# def user_applications(req):
#     if req.method == 'GET':
#         try:
#             user = User.objects.get(username=req.GET["username"])
#             applications = Application.objects.get(req.GET)
#             return JsonResponse(list(users), safe=False)
#         except Exception:
#             return JsonResponse({'err': 'Could not retrieve users.'})
    
