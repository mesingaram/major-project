from django.contrib import admin

# Register your models here.
from api.models import *

# class PatientInline(admin.TabularInline):
#     model=Patient
#     extra=0

# class DoctorAdmin(admin.ModelAdmin): 
#     inlines=[PatientInline]
# 
# admin.site.register(Doctor, DoctorAdmin)

class PatientInline(admin.TabularInline):
    model=Patient
    extra=0

class HospitalAdmin(admin.ModelAdmin):
    inlines=[PatientInline]

admin.site.register(Hospital, HospitalAdmin)
admin.site.register(Doctor)
admin.site.register(Patient)
admin.site.register(Patient_Feedback)