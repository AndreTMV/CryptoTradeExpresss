# Generated by Django 5.0.2 on 2024-02-21 05:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('login', '0006_alter_otpverification_otp'),
    ]

    operations = [
        migrations.AlterField(
            model_name='otpverification',
            name='email',
            field=models.EmailField(max_length=254, verbose_name='Email'),
        ),
        migrations.AlterField(
            model_name='otpverification',
            name='otp',
            field=models.CharField(default='kco08bo', max_length=7),
        ),
    ]
