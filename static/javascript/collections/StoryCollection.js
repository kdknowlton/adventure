var Backbone = require('Backbone')
var StoryModel = require('../models/StoryModel')

module.exports = Backbone.Collection.extend({
	model: StoryModel
})
