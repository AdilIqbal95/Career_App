# Generated by Django 3.2.3 on 2021-05-17 11:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('rewards', '0001_initial'),
        ('users', '0003_rename_group_claim_reward'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Claim',
            new_name='UserReward',
        ),
    ]
