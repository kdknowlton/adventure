var Backbone = require('backbone');
Backbone.$ = require('jquery');
var Marionette = require('backbone.marionette');

module.exports = Marionette.AppRouter.extend({
	appRoutes: {
		'': 'storyList',
		'event/:id/': 'eventDetail'
	}
});