from djangoreact.models import Employee
from djangoreact.serizalizers import EmployeeSerializer
from rest_framework import viewsets, permissions

class EmployeeViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = EmployeeSerializer

    def get_queryset(self):
        return self.request.user.djangoreact.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)