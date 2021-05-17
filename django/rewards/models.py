from django.db import models
# from users.models import Profile
# Create your models here.
class Reward (models.Model):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=500)
    point_change = models.IntegerField(default=0)
    
      
    def __str__(self):
        return self.title

