var Backbone = require('backbone');
var Event = require('./EventModel');

module.exports = Backbone.RelationalModel.extend({
	urlRoot: '/story/api/choices/',
	idAttribute: 'id',

	relations: [{
		type: Backone.HasOne,
		key: 'resulting_event',
		relatedModel: Event,
		includeInJson: 'id'
	}]
});