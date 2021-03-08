from django.db import models

# Create your models here.

class Posting(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField(max_length=300)
    style = models.CharField(max_length=40)
    powerwashed = models.BooleanField(default=False)
    summary = models.TextField(max_length=1000)