from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User
from . import models

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']


class EntrySerializer(ModelSerializer):
    class Meta:
        model = models.Entry
        fields = "__all__"


class BlogSerializer(ModelSerializer):
    author = UserSerializer()
    entries = EntrySerializer(many=True)

    class Meta:
        model = models.Blog
        fields = "__all__"

