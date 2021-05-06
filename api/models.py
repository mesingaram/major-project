from datetime import datetime, date

from django.forms import forms
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
    dob=models.DateField(default=date.today ,max_length=8)

    # For displaying doctor name in admin pannel instead of  Doctor object 1
    def __str__(self):
        return "Doctor %s " % (self.doctor_name)

appointment_time_choices = (
    ("10 am", "10 am"),
    ("11 am", "11 am"),
    ("12 pm", "12 pm"),
    ("1 pm", "1 pm"),
    ("2 pm", "2 pm"),
    ("3 pm", "3 pm"),
    ("4 pm", "4 pm"),
)
class Patient(models.Model):
    patient_name=models.CharField(max_length=30)
    hospital=models.ForeignKey(Hospital, on_delete=models.CASCADE)
    email=models.EmailField(default="comp@comp.com" ,max_length = 254)
    mobile = PhoneField(default=1234567890,help_text='Contact phone number')
    dob=models.DateField(default=timezone.now,max_length=8)
    appointment_date=models.DateField(default=date.today ,max_length=8)
    appointment_time=models.CharField(choices=appointment_time_choices, default='10 am', max_length=10)
    created_on=models.DateTimeField(default=timezone.now)
    waiting_status=models.BooleanField(default=True)

    def __str__(self):
        return self.patient_name

    def clean_date(self):
        date = self.cleaned_data['appointment_date']
        if date < datetime.date.today():
            raise forms.ValidationError("The date cannot be in the past!")
        return date

    @property
    def is_waiting(self):
        return bool(self.waiting_status)

class Patient_Feedback(models.Model):
    patient_name=models.CharField(max_length=30)
    state=models.CharField(max_length=30)
    email=models.EmailField(default="comp@comp.com" ,max_length = 254)
    mobile = PhoneField(default=1234567890,help_text='Contact phone number')
    hospital=models.ForeignKey(Hospital, on_delete=models.CASCADE)
    feedback=models.CharField(max_length=100)
    created_on=models.DateTimeField(default=timezone.now)
