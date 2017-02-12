var db = require('../config');

var knex = require('knex');
var Event = require('../model/event.js');

var Organizer = db.Model.extend({
	tableName: 'organizers',
	hasTimestamps: true,
	event: function() {
		return this.hasMany(Event);
	}
	
});

module.exports = Organizer;