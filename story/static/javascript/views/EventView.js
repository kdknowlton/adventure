var Backbone = require('backbone');
Backbone.$ = require('jquery');
var Marionette = require('backbone.marionette');

EventModel = require('../models/EventModel');
EventDetailTemplate = require('../templates/EventDetail.html');

module.exports = Marionette.ItemView.extend({
	template: EventDetailTemplate,
	tagName: 'tr',
});