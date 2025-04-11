from django.contrib import admin
from django.urls import path,include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'tasks',views.TaskView,'tasks')
#Esto genera automáticamente todas las rutas necesarias para que esa vista funcione.

urlpatterns = [
    path('api/',include(router.urls()))
]