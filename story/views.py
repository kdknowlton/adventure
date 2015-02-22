from django.shortcuts import render
from django.contrib import auth
from rest_framework import viewsets
from story.serializers import StorySerializer, EventSerializer, ChoiceSerializer, UserSerializer
from story.models import Story, Event, Choice

def index(request):
	context = {}
	return render(request, 'single-page.html', context)

class UserViewSet(viewsets.ModelViewSet):
	"""
	API endpoint to view or edit django users.
	"""
	queryset = auth.models.User.objects.all()
	serializer_class = UserSerializer

class StoryViewSet(viewsets.ModelViewSet):
	"""
	API endpoint to view or edit stories.
	"""
	queryset = Story.objects.all()
	serializer_class = StorySerializer

class EventViewSet(viewsets.ModelViewSet):
	"""
	API endpoint to view or edit story events.
	"""
	queryset = Event.objects.all()
	serializer_class = EventSerializer

class ChoiceViewSet(viewsets.ModelViewSet):
	"""
	API endpoint to view or edit story choices.
	"""
	queryset = Choice.objects.all()
	serializer_class = ChoiceSerializer