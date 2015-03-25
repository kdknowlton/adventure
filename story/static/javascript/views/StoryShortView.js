var Backbone = require('backbone');
Backbone.$ = require('jquery');
var Marionette = require('backbone.marionette');

StoryModel = require('../models/StoryModel');
StoryShortTemplate = require('../templates/StoryShort.html');

module.exports = Marionette.ItemView.extend({
	template: StoryShortTemplate,
	tagName: 'tr',
});