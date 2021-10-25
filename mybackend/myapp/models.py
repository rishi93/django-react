from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Blog(models.Model):
    title = models.CharField(max_length=200, null=False)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='blogs')

class Entry(models.Model):
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE, related_name='entries')
    headline = models.CharField(max_length=200, null=False)
    content = models.TextField(null=False)