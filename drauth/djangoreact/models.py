from django.db import models

# Create your models here.
class Employee(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    message = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)