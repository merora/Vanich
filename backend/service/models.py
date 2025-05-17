from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.

class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone = models.CharField(max_length=20, blank=True)
    agree = models.BooleanField(default=False)
    def __str__(self):
        return self.user.username


class ShopProfile(models.Model):
    shop_id = models.IntegerField()
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    shop_name = models.CharField(max_length=40)
    description = models.CharField(max_length=2000)

class Category(models.Model):
    category_id = models.IntegerField()
    name = models.CharField(max_length=40)

class CommissionJob(models.Model):
    job_id = models.IntegerField()
    shop_id = models.ForeignKey(ShopProfile, on_delete=models.CASCADE)
    title = models.CharField(max_length=40)
    description = models.CharField(max_length=2000)
    price = models.DecimalField(max_digits=6, decimal_places=2, validators=[MinValueValidator(0.0)])
    status = models.CharField(max_length=10)

class Product(models.Model):
    product_id = models.IntegerField()
    shop_id = models.ForeignKey(ShopProfile, on_delete=models.CASCADE)
    name  = models.CharField(max_length=40)
    description = models.CharField(max_length=2000)
    price = models.DecimalField(max_digits=6, decimal_places=2, validators=[MinValueValidator(0.0)])
    category_id = models.ForeignKey(Category, on_delete=models.CASCADE)
    image_url = models.URLField(blank=True, null=True)
    type = models.CharField(max_length=40, default="none")

class Order(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    order_id = models.IntegerField()
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    total_amount = models.PositiveIntegerField(validators=[MaxValueValidator(4)])
    status = models.CharField(max_length=10)
    # address
    # payment

class OrderItem(models.Model):
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE)
    order_id = models.ForeignKey(Order, on_delete=models.CASCADE)
    item_id = models.IntegerField()
    quantity = models.PositiveIntegerField(validators=[MaxValueValidator(4)])
    price = models.DecimalField(max_digits=6, decimal_places=2, validators=[MinValueValidator(0.0)])
    