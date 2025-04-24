from django.db import models

# Create your models here.
class Task(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True) #blank permite que el campo sea opcional.
    done = models.BooleanField(default=False)
    
    def __str__(self):
        return f"{self.title},{self.description},done:{self.done}"