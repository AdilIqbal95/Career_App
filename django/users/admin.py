from django.contrib import admin
from .models import User, Profile, Application

class UserAdmin(admin.ModelAdmin):
    model = User

admin.site.register(User, UserAdmin)
admin.site.register(Profile)
admin.site.register(Application)

