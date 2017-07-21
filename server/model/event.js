var db = require("../config-db")

var knex = require("knex")


var Event = db.Model.extend({
	tableName: "events",
	hasTimestamps: true,

	organizer: function() {
		return this.belongsTo(Organizer,"organizerId")
	},

	
})

module.exports = Event




