# Generated by Django 5.0.2 on 2024-02-21 05:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('login', '0007_alter_otpverification_email_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='otpverification',
            name='otp',
            field=models.CharField(default='fn6went', max_length=7),
        ),
    ]