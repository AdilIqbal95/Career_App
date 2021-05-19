# Generated by Django 3.2.3 on 2021-05-19 09:52

import careers.storage_backends
from django.db import migrations, models
import users.utils


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_auto_20210518_1934'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='desired_job',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='profile',
            name='education',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='profile',
            name='previous_experience',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='cv',
            field=models.FileField(blank=True, null=True, storage=careers.storage_backends.LocalMediaStorage(), upload_to=users.utils.Rename('profiles/cv')),
        ),
        migrations.AlterField(
            model_name='profile',
            name='profile_image',
            field=models.ImageField(blank=True, null=True, storage=careers.storage_backends.LocalMediaStorage(), upload_to=users.utils.Rename('profiles/image')),
        ),
    ]
