from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *

class RegisterSerializer(serializers.Serializer):
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)
    phone = serializers.CharField()
    agree = serializers.BooleanField()

    def create(self, validated_data):
        phone = validated_data.pop('phone')
        agree = validated_data.pop('agree')

        user = User.objects.create_user(
            username=validated_data['email'],
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
        )
        Customer.objects.create(user=user, phone=phone, agree=agree)
        return user
    
class ProductSerializer(serializers.ModelSerializer):
    shop_name = serializers.CharField(source='shop_id.shop_name', read_only=True)
    category = serializers.CharField(source='category_id.name', read_only=True)

    class Meta:
        model = Product
        fields = ['id', 'shop_name', 'name', 'description', 'price', 'category', 'image_url', 'type']
