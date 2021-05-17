from django.db import models

# Create your models here.
class Reward (models.Model):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=500)
    point_cost = models.PositiveSmallIntegerField(default=1)
    
      
    def __str__(self):
        return self.title

