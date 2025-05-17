from django.contrib import admin
from .models import *

# Register your models here.

@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'user__first_name', 'user__last_name', 'tel')
    search_fields = ('user__username', 'user__first_name', 'user__last_name', 'tel')
    list_filter = ('user__username',)
    ordering = ('id',)


admin.site.register(ShopProfile)
admin.site.register(Category)
admin.site.register(CommissionJob)
admin.site.register(Product)
admin.site.register(OrderItem)

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'created_at', 'order_id', 'user_id', 'total_amount', 'status')
    search_fields = ('total_price', 'status', 'user__user__username')
    list_filter = ('user_id',)
    ordering = ('id',)