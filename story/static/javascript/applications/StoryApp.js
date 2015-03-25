var $ = require('jquery');
var _ = require('lodash');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');

var MainLayoutView = require('../views/MainLayoutView');
var StoryRouter = require('../routers/StoryRouter');
var StoryController = require('../controllers/StoryController');

module.exports = Marionette.Application.extend({
	initialize: function(options){
		this.layoutView = new MainLayoutView({
			el: '#MainLayout'
		});
		this.router = new StoryRouter({
			controller: new StoryController()
		});
	},
	onStart: function(options){
		if (Backbone.history) {
			Backbone.history.start();
		}
	}
});