# profile/admin.py
from django.contrib import admin
from .models import Contact

# Register the models with the admin site
admin.site.register(Contact)
# admin.site.register(Resume)
