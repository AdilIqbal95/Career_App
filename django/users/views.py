from django.shortcuts import render, redirect
from django.urls import reverse
from django.contrib import messages
from .forms import UserRegistrationForm

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
