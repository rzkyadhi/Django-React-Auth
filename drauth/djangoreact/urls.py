from rest_framework import routers
from djangoreact.api import EmployeeViewSet

router = routers.DefaultRouter()
router.register('api/employees', EmployeeViewSet, 'employee')

urlpatterns = router.urls