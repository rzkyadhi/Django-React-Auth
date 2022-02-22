from djangoreact.models import Employee
from djangoreact.serizalizers import EmployeeSerializer
from rest_framework import viewsets, permissions

class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = EmployeeSerializer