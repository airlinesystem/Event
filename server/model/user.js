var db = require('../config-db');

var knex = require('knex');
//var Sketch = require('../model/sketch.js');

var User = db.Model.extend({
	tableName: 'users',
	hasTimestamps: true,
	
});

module.exports = User;
// var db = require('../config');
// var bcrypt = require('bcrypt-nodejs');
// var Promise = require('bluebird');
// var knex = require('knex');
// var Sketch = require('../model/sketch.js');

// var User = db.Model.extend({
// 	tableName: 'users',
// 	hasTimestamps: true,
// 	sketch: function() {
// 		return this.hasMany(Sketch);
// 	}
// });

// module.exports = User;