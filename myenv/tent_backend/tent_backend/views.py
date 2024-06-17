from rest_framework import generics
from .models import Post
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import PostSerializer

@api_view(['GET'])
def apiOverview(request):
    return Response("Hello, world!")

def index(request):
    return render(request, 'index.html')

class PostListCreate(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class PostListAPIView(APIView):
    def get(self, request, format=None):
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        pass
