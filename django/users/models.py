from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save
from django.dispatch import receiver
from rewards.models import Reward
from careers.storage_backends import PrivateMediaStorage

class User(AbstractUser):
    pass


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    description = models.TextField(max_length=240, blank=True)
    profile_image = models.ImageField(upload_to='profiles/image', blank=True, null=True, storage=PrivateMediaStorage())
    cv = models.FileField(upload_to='profiles/cv', blank=True,  null=True, storage=PrivateMediaStorage())
    points = models.PositiveSmallIntegerField(default=0)
    rewards = models.ManyToManyField(Reward, through='UserReward')

    def __str__(self):
        return self.user.username
    

# Update user profile if user created
@receiver(post_save, sender= User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

# Update user profile if user is saved
@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()


class Application(models.Model):
    user_profile = models.ForeignKey("Profile", related_name="applications", on_delete=models.CASCADE)
    job_title = models.CharField(max_length=50)
    company = models.CharField(max_length=50)
    description = models.CharField(max_length=500)
    url = models.URLField()
    saved = models.BooleanField(default=False)
    applied = models.BooleanField(default=False)
    interviewed = models.BooleanField(default=False)
    offered = models.BooleanField(default=False)
    accepted = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.user_profile} | {self.job_title} "

class UserReward(models.Model):
    user = models.ForeignKey(Profile, related_name='user_to_reward', on_delete=models.CASCADE)
    reward = models.ForeignKey(Reward, related_name='reward_to_user', on_delete=models.CASCADE)
    date_claimed = models.DateField(auto_now_add=True)

    def __str__(self):
        return str(self.user) + ' | ' + str(self.reward)