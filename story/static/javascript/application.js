var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');

var Rivets = require('rivets');
require('rivets-backbone-adapter');
Rivets.configure({});

var MainLayoutView = require('./views/MainLayoutView');

var StoryApp = new Marionette.Application();

StoryApp.addRegions({
	mainRegion: "#content"
});

StoryApp.addInitializer(function (options){
	var mainView = new MainLayoutView();
	StoryApp.mainRegion.show(mainView);
});

$(document).ready(function (){
	StoryApp.start();
});