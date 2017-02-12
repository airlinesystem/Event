var db = require('../config');
var Event = require('../model/event');

var Events = new db.Collection();

Events.model = Event;

module.exports = Events;