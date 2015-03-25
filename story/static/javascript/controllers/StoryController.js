var Radio = require('backbone.radio');
var StoryModel = require('../models/StoryModel');
var EventModel = require('../models/EventModel');
var StoryCollection = require('../collections/StoryCollection');

var routeChannel = Radio.channel('route');

module.exports = function(){
	this.storyCollection = new StoryCollection();

	this.storyList = function(){
		var self = this;
		self.storyCollection.fetch({
			success: function(){
				routeChannel.command('change', 'storyList', self.storyCollection);
			},
			error: function(){
				console.log('There was an error.');
			}
		})
	};

	this.eventDetail = function(eventId){
		var self = this;
		self.eventModel = new EventModel({id: eventId});
		self.eventModel.fetch({
			success: function(){
				routeChannel.command('change', 'eventDetail', self.eventModel);
			},
			error: function(){
				console.log('Couldn\'t fetch event.');
			}
		})
	}
};
