from django.urls import path, include

from rest_framework import routers

from .views import GameViewSet

router = routers.DefaultRouter()
router.register(r'game', GameViewSet)

urlpatterns = [
        path('api/v1/', include(router.urls))
        ]
