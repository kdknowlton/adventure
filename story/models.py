from django.db import models

class Story(models.Model):
	title = models.CharField(max_length=100)
	author = models.ForeignKey('auth.User')
	published_date = models.DateTimeField()
	first_event = models.ForeignKey(
		'Event',
		related_name='+',
		null=True,
		blank=True
	)

	def __str__(self):
		return self.title

class Event(models.Model):
	event_text = models.TextField()
	story = models.ForeignKey(Story)

	def __str__(self):
		return self.event_text[:100]

class Choice(models.Model):
	choice_text = models.TextField()
	triggering_event = models.ForeignKey(Event, related_name='choices')
	resulting_event = models.ForeignKey(Event, related_name='causes')

	def __str__(self):
		return self.choice_text[:100]
