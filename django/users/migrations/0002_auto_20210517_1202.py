# Generated by Django 3.2.3 on 2021-05-17 11:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('rewards', '0001_initial'),
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Claim',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_claimed', models.DateField(blank=True, null=True)),
                ('group', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='rewards.reward')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.profile')),
            ],
        ),
        migrations.AddField(
            model_name='profile',
            name='rewards',
            field=models.ManyToManyField(through='users.Claim', to='rewards.Reward'),
        ),
    ]
