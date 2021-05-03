from django.shortcuts import render, redirect

# Create your views here.
from django.urls import reverse_lazy
from rest_framework.response import Response
from rest_framework.views import APIView

from api.serializers import PatientSerializer
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
    fields=['doctor', 'patient_name']
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
    fields = ['doctor', 'patient_name', 'created_on', 'waiting_status']
    model=Patient


class PatientUpdateView(UpdateView):
    model=Patient
    fields = ["patient_name", "waiting_status"]
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
            patients = Patient.objects.get(pk=id_)
            serializer = PatientSerializer(patients)
            return Response(serializer.data)  # else disp api view
        except: # if no data found throw not found
            return Response({'error':True, 'message':'Data not found'})

class HospitalSearch(APIView): # for displaying api response in browser as api or as webpage
    def get(self, request, *args, **kwargs):
        try:
            zipcode_ = self.kwargs.get("pk")
            hospital = Hospital.objects.filter(zipcode=zipcode_)
            serializer = HospitalSerializer(hospital, many=True)
            new_serializer={'error':False, 'message':'Data found'} # to add error false to serializer data
            new_serializer.update(serializer.data)            # we need to copy it to new dict  (serializer.data is a property of the class and therefore immutable)
            return Response(new_serializer)  # api view
        except:
            return Response({'error':True, 'message':'No Clinic found at this Zip code'})

# class PatientsUnderHospitalView(APIView): # api view
#     def get(self, request, *args, **kwargs):
#         try:
#             hosp_patients = Hospital.objects.all().prefetch_related('many_set')
#             # serializer = PatientSerializer(doc_patients)
#             # return Response(serializer.data)  # else disp api view
#             return render(request, 'test.html',{'hosps':hosp_patients}) # as webpage view
#         except: # if no data found throw not found
#             return Response({'error':True, 'message':'Data not found'})
