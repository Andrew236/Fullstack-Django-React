from django.shortcuts import render
from .serializers import PictureSerializer
from rest_framework import viewsets
from .models import Picture
from django.http import HttpResponse
# Create your views here.

class PictureViewSet(viewsets.ModelViewSet):
    queryset = Picture.objects.all()
    serializer_class = PictureSerializer
    

    def post(self, request, format=None):
        image = request.data[image]
        name = request.data[name]
        summary = request.data[summary]
        Picture.objects.create(name=name, image=image, summary=summary)
        return HttpResponse({'message': 'picture generated'}, status=200)