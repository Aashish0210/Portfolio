# profile/models.py

from django.db import models

class Contact(models.Model):
    from_name = models.CharField(max_length=100)
    reply_to = models.EmailField(max_length=100)
    message = models.TextField()
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.from_name} - {self.submitted_at}"
