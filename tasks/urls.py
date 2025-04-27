from django.urls import path,include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from . import views

# el router se encarga de registrar los viewsets y generar automáticamente las rutas.
router = routers.DefaultRouter()
router.register(r'tasks',views.TaskView,'tasks') #r indica que la ruta es una cadena de texto sin caracteres especiales.

urlpatterns = [
    path('api/',include(router.urls)),
    path('docs/',include_docs_urls(title="Docs tasks api"))
]