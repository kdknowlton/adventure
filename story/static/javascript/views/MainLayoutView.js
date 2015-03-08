var Backbone = require('backbone');
Backbone.$ = require('jquery');
var Marionette = require('backbone.marionette');

var MainRegionTemplate = require('../templates/MainRegion.html');

module.exports = Marionette.LayoutView.extend({
	tagName: 'div',
	id: 'content',
	template: MainRegionTemplate
});