from django.contrib import admin
from django.urls import path
from rest_framework import routers
from django.conf.urls import include
router = routers.DefaultRouter()
from .views import PostingViewSet

router = routers.DefaultRouter()
router.register('postings', PostingViewSet)

urlpatterns = [
    path('', include(router.urls)),
    
]