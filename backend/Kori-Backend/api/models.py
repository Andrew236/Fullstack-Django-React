from django.db import models
from django.utils.translation import gettext_lazy as _

def upload_path(instance, filename):
    return 'posts/{filename}'.format(filename=filename)

# Create your models here.
class Picture(models.Model):
    name = models.CharField(max_length=60)
    summary = models.TextField(max_length=360)
    image = models.ImageField(_("Image"),null=False, blank=False, upload_to=upload_path)