from django.forms import forms
from rest_framework import serializers

from .models import *


class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model=Doctor
        fields="__all__"

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model=Patient
        fields="__all__"

class HospitalSerializer(serializers.ModelSerializer):
    class Meta:
        model=Hospital
        fields="__all__"