from django.urls import path

from . import views

app_name="api"
urlpatterns=[
    path('', views.PatientView.as_view(),name="patient_list"),
    path("patient/create", views.PatientCreateView.as_view(), name="patient_create" ),
    #path("doctor/<int:pk>", views.DoctorDetailedView.as_view(), name="doctor_detail" ),
    path("patient/<int:pk>", views.PatientDetailView.as_view(), name="patient_detail" ),
    path("patient/<int:pk>/edit", views.PatientUpdateView.as_view(), name="patient_update" ),
    path("patient/<int:pk>/delete", views.PatientDeleteView.as_view(), name="patient_delete" ),
    path("patient/<int:pk>/mark", views.PatientMark.as_view(), name="patient_mark" ),
    path("hosp/<int:pk>/", views.HospitalSearch.as_view(), name="hospital_search" ),
    path("hosp_patient/<str:name>/", views.PatientsUnderHospital.as_view(), name="hosp_patient" ),
]