from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.decorators import action
from .models import Posting
from rest_framework.response import Response
from .serializers import PostingSerializer
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import smtplib


class PostingViewSet(viewsets.ModelViewSet):
    queryset = Posting.objects.all()
    serializer_class = PostingSerializer
    

    @action(detail=True, methods=['POST'])
    def send_form(self, request, pk='id'):
        if 'name' in request.data and 'email' in request.data and 'style' in request.data and 'powerwashed' in request.data and 'summary' in request.data:

            #part of code dealing with sending an email
            message = MIMEMultipart()
            posting = Posting.objects.get(id=pk)
            order_form_id = pk
            name = request.data['name']
            email = request.data['email']
            style = request.data['style']
            summary = request.data['summary']
            powerwashed = request.data['powerwashed']
            print(name, email, style, summary)
            message["from"] = name
            message["to"] = "maverickandpaisleepieces@gmail.com"
            message["subject"] = f"Website order form request #{order_form_id}"
            message.attach(MIMEText(f"Message From: {name}\n{name}'s email address: {email}\n\n"))
            message.attach(MIMEText(f"Style options:\nPower washed: {powerwashed}\nStyle: {style}\n\n"))
            message.attach(MIMEText(f"Hey Kori...\n{summary}"))

            #no reply message
            message_no_reply = MIMEMultipart()
            message_no_reply["subject"] = "No Reply"
            message_no_reply["to"] = email
            message_no_reply["from"] = "Kori's receptionist"
            message_no_reply.attach(MIMEText("Thank you for filling out a form. Kori will be in contact with you soon!"))
            
            with smtplib.SMTP(host="smtp.gmail.com", port=587) as smtp:
                smtp.ehlo()
                smtp.starttls()
                smtp.login("korisreceptionist@gmail.com", "maverickiscool23")
                smtp.send_message(message)
                smtp.send_message(message_no_reply)
                print("Sent")

        #end code dealing with email

            response = {'message': 'its working'}
            return Response(response, status=status.HTTP_200_OK)
        else:
            response = {'message': 'Failed'}
            return Response(response, status=status.HTTP_400_BAD_REQUEST)

# Create your views here.
