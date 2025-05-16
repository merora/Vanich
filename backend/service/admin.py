from django.contrib import admin
from .models import *

# Register your models here.
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