from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import *
from .serializers import *
        
class RegisterView(APIView):
    def post(self, request):
        print("DEBUG data:", request.data)
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'ลงทะเบียนสำเร็จ'}, status=201)
        print(serializer.errors)
        return Response(serializer.errors, status=400)

class ProductDetailView(RetrieveAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        return Product.objects.filter(type='product')

class ProductListView(ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        return Product.objects.filter(type='product')

class JobListView(ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        return Product.objects.filter(type='job')


class JobDetailView(APIView):
    def get(self, request, pk):
        try:
            job = Product.objects.filter(type='job').get(pk=pk)
            serializer = ProductSerializer(job)
            return Response(serializer.data)
        except Product.DoesNotExist:
            return Response({"detail": "Not found."}, status=404)
        

