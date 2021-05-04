from django.shortcuts import render, redirect

# Create your views here.
from django.urls import reverse_lazy
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view

from api.serializers import *
from api.models import *
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.views.generic import ListView, DetailView

# class IndexView(ListView):
#
#     def get_queryset(self):
#         return Patient.objects.filter(waiting_status=True)

# class PatientVieww(ListAPIView):
#     queryset=Patient.objects.all()
#     serializer_class=PatientSerializer

# above code or below code for view as json
class PatientView(APIView): # for displaying api response in browser as api or as webpage
    def get(self, request, *args, **kwargs):
        patients=Patient.objects.filter(waiting_status=True)
        serializer=PatientSerializer(patients,  many=True)
        #return Response(serializer.data) # api view
        return render(request, 'patient_list.html',{'patient_list':patients}) # as webpage view

class PatientCreateView(CreateView):
    model=Patient
    fields=['patient_name','hospital','email','mobile','dob']
    template_name='patient_create_form.html'
    success_url =  reverse_lazy("api:patient_list") 

# class PatientDetailView(APIView): # api view
#     def get(self, request, *args, **kwargs):
#         try:
#             id_ = self.kwargs.get("pk")
#             patients = Patient.objects.get(pk=id_)
#             serializer = PatientSerializer(patients)
#             return Response(serializer.data)  # else disp api view
#         except: # if no data found throw not found
#             return Response({'error':True, 'message':'Data not found'})
#


class PatientDetailView(DetailView): # for displaying api response in browser as webpage
    template_name = "patient_detail.html"
    fields = ['patient_name','hospital','email','mobile','dob', 'created_on', 'waiting_status']
    model=Patient


class PatientUpdateView(UpdateView):
    model=Patient
    fields = ['patient_name','hospital','email','mobile','dob']
    template_name = 'patient_update_form.html'
    success_url = reverse_lazy("api:patient_list")

class PatientDeleteView(DeleteView):
    model=Patient
    template_name = 'patient_confirm_delete.html'
    success_url = reverse_lazy("api:patient_list")

class PatientMark(APIView):
    success_url = reverse_lazy("api:patient_list")
    def get(self, request, *args, **kwargs):
        id_ = self.kwargs.get("pk")
        patient=Patient.objects.get(pk=id_)
        patient.waiting_status=False
        patient.save()
        return redirect('api:patient_list')

class DoctorDetailView(APIView): # api view
    def get(self, request, *args, **kwargs):
        try:
            id_ = self.kwargs.get("pk")
            doctor = Doctor.objects.get(pk=id_)
            serializer = DoctorSerializer(doctor)
            return Response(serializer.data)  # else disp api view
        except: # if no data found throw not found
            return Response({'error':True, 'message':'Data not found'})

class HospitalSearch(APIView): # for displaying api response in browser as api or as webpage
    def get(self, request, *args, **kwargs):
        try:
            zipcode_ = self.kwargs.get("pk")
            hospital = Hospital.objects.filter(zipcode=zipcode_ )
            serializer = HospitalSerializer(hospital, many=True)
            # new_serializer={'error':False, 'message':'Data found'} # to add error false to serializer data
            # new_serializer=serializer.data     # we need to copy it to new dict  (serializer.data is a property of the class and therefore immutable)
            if Hospital.objects.filter(zipcode=zipcode_ ).exists():
                return Response(serializer.data)  # api view
            else:
                return Response({'error': True, 'message': 'No Clinic found at this Zip code'})
        except:
            return Response({'error':True, 'message':'No Clinic found at this Zip code'})

# @api_view(['GET'])
# def PatientsUnderHospital(request, name): # api view
#
#     #try:
#     hosp_patients = Patient.objects.filter(hospital=name)
#     serializer = PatientSerializer(hosp_patients,many=True)
#     return Response(serializer.data)
#         #return render(request, 'test.html',{'hosps':hosp_patients}) # as webpage view
#     #except: # if no data found throw not found
#         #return Response({'error':True, 'message':'Data not found'})

class PatientsUnderHospital(APIView): # for displaying api response in browser as api or as webpage
    def get(self, request, *args, **kwargs):
        try:
            hosp_id = self.kwargs.get("hosp_id")
            hosp_patients = Patient.objects.filter(hospital=hosp_id)  # as foreignkey stores id value instead of  name in model (hospital=2, patient_name=sangaram)
            serializer = PatientSerializer(hosp_patients, many=True)
            if Patient.objects.filter(hospital=hosp_id).exists():
                return Response(serializer.data)  # api view
            else:
                return Response({'error': True, 'message': 'No Patients  found under this Hosp'})
        except:
            return Response({'error':True, 'message':'No Patients  found under this Hosp'})
