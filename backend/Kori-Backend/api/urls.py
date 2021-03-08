from django.contrib import admin
from django.urls import path
from rest_framework import routers
from django.conf.urls import include
from .views import PictureViewSet

from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register('pictures', PictureViewSet)

urlpatterns = [
    path('', include(router.urls)),
    
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)