# Generated by Django 5.0.2 on 2024-02-21 05:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('login', '0005_otpverification_delete_otpverifiaction'),
    ]

    operations = [
        migrations.AlterField(
            model_name='otpverification',
            name='otp',
            field=models.CharField(default='6b0p753', max_length=7),
        ),
    ]
