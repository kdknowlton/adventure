from django.contrib import admin
from story.models import Story, Event, Choice

class EventInline(admin.StackedInline):
	model = Event
	extra = 3

class StoryAdmin(admin.ModelAdmin):
	inlines = [EventInline]

admin.site.register(Story, StoryAdmin)
admin.site.register(Event)
admin.site.register(Choice)
