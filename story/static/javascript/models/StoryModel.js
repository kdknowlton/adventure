var Backbone = require('backbone');
var Event = require('./EventModel');

module.exports = Backbone.RelationalModel.extend({
	urlRoot: '/story/api/stories/',
	idAttribute: 'id',
	relations: [{
		type: Backbone.HasOne,
		key: 'firstEvent',
		relatedModel: Event,
		includeInJSON: 'id',
	}]
});