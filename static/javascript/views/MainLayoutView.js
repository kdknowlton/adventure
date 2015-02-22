var Backbone = require('backbone')
var Marionette = require('backbone.marionette')

var MainRegionTemplate = require('../templates/MainRegion.html')

module.exports = Marionette.Layout.extend({
	tagName: 'div',
	id: 'MainRegion',
	template: MainRegionTemplate
})