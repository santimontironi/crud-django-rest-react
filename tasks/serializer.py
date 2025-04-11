from rest_framework import serializers
from .models import Task

#Serializar = convertir objetos de Python (como modelos de Django) en datos planos (JSON, XML, etc.) y viceversa.

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__' #se le dice a Django REST Framework: “Solo quiero que serialices estos campos del modelo Producto.”
        
