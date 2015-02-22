from story.models import Story, Event, Choice
from rest_framework import serializers
from django.contrib import auth

class UserSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = auth.models.User
		fields = ('username', 'first_name', 'last_name', 'email', 'is_active', 'story_set')

class StorySerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Story
		fields = ('title', 'published_date', 'author', 'first_event')

class EventSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Event
		fields = ('event_text', 'story', 'choices')

class ChoiceSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Choice
		fields = ('choice_text', 'triggering_event', 'resulting_event')
