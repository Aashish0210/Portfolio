# profile/views.py
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings
from .forms import ContactForm

@api_view(['POST'])
def contact_api(request):
    if request.method == 'POST':
        form = ContactForm(request.data)

        if form.is_valid():
            from_name = form.cleaned_data['from_name']
            reply_to = form.cleaned_data['reply_to']
            message = form.cleaned_data['message']
            
            # Send email via Django's send_mail method
            send_mail(
                f"Message from {from_name}",
                message,
                reply_to,
                [settings.EMAIL_HOST_USER],
                fail_silently=False,
            )
            
            return Response({"message": "Thanks for contacting me. I have received your message."}, status=status.HTTP_200_OK)

        return Response({"error": "Please fill all the required fields"}, status=status.HTTP_400_BAD_REQUEST)
