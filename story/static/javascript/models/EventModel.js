var Backbone = require('backbone');
var Choice = require('./ChoiceModel');

module.exports = Backbone.RelationalModel.extend({
	urlRoot: '/story/api/events/',
	idAttribute: 'id',

	relations: [
		{
			type: Backbone.HasMany,
			key: 'choices',
			realtedModel: Choice,
			includeInJSON: 'id',
			reverseRelation: {
				key: 'triggering_event',
				type: Backbone.HasOne,
				includeInJSON: 'id'
			}
		},
		{
			type: Backbone.HasMany,
			key: 'causeList',
			relatedModel: Choice,
			includeInJSON: 'id',
			reverseRelation: {
				key: 'resulting_event',
				type: Backbone.HasOne,
				includeInJSON: 'id'
			}
		}
	]
});