var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var Marionette = require('backbone.marionette');
var _ = require('lodash');

var StoriesTemplate = require('../templates/Stories.html');
var StoryShortView = require('./StoryShortView');
var Story = require('../models/StoryModel');

module.exports = Marionette.CompositeView.extend({
	tagName: 'table',
	template: StoriesTemplate,
	childView: StoryShortView,
	childViewContainer: 'tbody'
})