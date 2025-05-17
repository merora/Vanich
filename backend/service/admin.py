from django.contrib import admin
from .models import *

# Register your models here.

@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    list_display = ('id', 'user','first_name', 'last_name', 'phone')
    search_fields = ('first_name', 'last_name', 'phone')
    list_filter = ('user__first_name',)
    ordering = ('id',)
    def first_name(self, obj):
        return obj.user.first_name

    def last_name(self, obj):
        return obj.user.last_name


admin.site.register(ShopProfile)
admin.site.register(Category)
admin.site.register(CommissionJob)

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'shop_id', 'name', 'description', 'price', 'category_id', 'image_url', 'type')
    search_fields = ('name', 'shop_id')
    list_filter = ('name',)
    ordering = ('id',)

admin.site.register(OrderItem)

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'created_at', 'order_id', 'user_id', 'total_amount', 'status')
    search_fields = ('total_price', 'status', 'user__user__username')
    list_filter = ('user_id',)
    ordering = ('id',)