var db = require('../config');
var Organizer = require('../model/organizer');

var Organizers = new db.Collection();

Organizers.model = Organizer;

module.exports = Organizers;
