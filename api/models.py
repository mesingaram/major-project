from django.utils import timezone
from django.db import models
from phone_field import PhoneField

# Create your models here.

# class Appointment(models.Model):
#     user_account_id
#     office_id

class Hospital(models.Model):
    name=models.CharField(max_length=40, unique=True)
    address=models.CharField(max_length=100)
    zipcode=models.CharField(max_length=6)
    mobile=PhoneField(help_text='Contact phone number')
    email = models.EmailField(default="comp@comp.com", max_length=254)
    # need to add schedule
    # For displaying hosp name in admin pannel instead of  Hospital object 1
    def __str__(self):
        return self.name

class Doctor(models.Model):
    doctor_name=models.CharField(max_length=30)
    created_on=models.DateTimeField("Date Registered", default=timezone.now)
    hospital=models.ForeignKey(Hospital, on_delete=models.CASCADE)
    specialization=models.CharField(max_length=70)
    email=models.EmailField(default="comp@comp.com" ,max_length = 254)
    mobile = PhoneField(default=1234567890,help_text='Contact phone number')
    dob=models.DateField(default=timezone.now,max_length=8)

    # For displaying doctor name in admin pannel instead of  Doctor object 1
    def __str__(self):
        return "Doctor %s " % (self.doctor_name)

class Patient(models.Model):
    hospital=models.ForeignKey(Hospital, on_delete=models.CASCADE)
    patient_name=models.CharField(max_length=30)
    email=models.EmailField(default="comp@comp.com" ,max_length = 254)
    mobile = PhoneField(default=1234567890,help_text='Contact phone number')
    dob=models.DateField(default=timezone.now,max_length=8)
    created_on=models.DateTimeField(default=timezone.now)
    waiting_status=models.BooleanField(default=True)

    def __str__(self):
        return self.patient_name

    @property
    def is_waiting(self):
        return bool(self.waiting_status)

