from story.models import Story, Event, Choice
from rest_framework import serializers
from django.contrib import auth

class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = auth.models.User
		fields = ('id', 'username', 'first_name', 'last_name', 'email', 'is_active', 'story_set')

class StorySerializer(serializers.ModelSerializer):
	class Meta:
		model = Story
		fields = ('id', 'title', 'published_date', 'author', 'first_event')

class EventSerializer(serializers.ModelSerializer):
	class Meta:
		model = Event
		fields = ('id', 'event_text', 'story', 'choices')

class ChoiceSerializer(serializers.ModelSerializer):
	class Meta:
		model = Choice
		fields = ('id', 'choice_text', 'triggering_event', 'resulting_event')
