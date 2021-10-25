from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.models import User
from . import serializers

def index(request):
    return JsonResponse({'message': 'Hello from Django!'})


class UserView(APIView):
    def get(self, request, id):
        try:
            user = User.objects.get(id=id)
            serializer = serializers.UserSerializer(user)
            return Response(serializer.data)
        except User.DoesNotExist:
            return Response({"message": "User does not exist!"})


class BlogView(APIView):
    def get(self, request):
        try:
            user_id = request.query_params.get('user_id', None)
            if user_id:
                user_id = int(user_id)
                user = User.objects.get(id=user_id)
                blogs = user.blogs.all()
                serializer = serializers.BlogSerializer(blogs, many=True)
                return Response(serializer.data)
        except User.DoesNotExist:
            return Response({"message": "User does not exist!"})
