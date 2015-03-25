var Backbone = require('backbone');
Backbone.$ = require('jquery');
var StoryModel = require('../models/StoryModel');

module.exports = Backbone.Collection.extend({
	model: StoryModel,
	url: '/story/api/stories/'
});
