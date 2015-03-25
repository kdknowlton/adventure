var Marionette = require('backbone.marionette');
var Radio = require('backbone.radio')

var StoriesView = require('./StoriesView');
var EventView = require('./EventView')

module.exports = Marionette.LayoutView.extend({
	regions: {
		'mainContent': '#content'
	},

	initialize: function(){
		Radio.channel('route').comply('change', this.routeChange.bind(this));
	},

	routeChange: function(route, object){
		if(route === 'storyList'){
			this.regionManager.get('mainContent').show(
				new StoriesView({collection: object})
			);
		} else if (route === 'eventDetail'){
			this.regionManager.get('mainContent').show(
				new EventView({model: object})
			);
		};
	}
});
