var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');
require('backbone-relational');

var StoryAppClass = require('./applications/StoryApp');
var StoryApp = new StoryAppClass();

$(document).ready(function (){
	StoryApp.start();
});