# Generated by Django 3.1.7 on 2021-04-27 16:06

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20210422_1646'),
    ]

    operations = [
        migrations.AlterField(
            model_name='doctor',
            name='created_on',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='Date Registered'),
        ),
        migrations.AlterField(
            model_name='patient',
            name='created_on',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
