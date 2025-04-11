from rest_framework import viewsets
from .serializer import TaskSerializer
from .models import Task

# Create your views here.
class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    tasks = Task.objects.all()
    
# La vista (TaskView) es una clase que maneja todo el CRUD.