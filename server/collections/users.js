var db = require('../config');
var User = require('../model/user');

var Users = new db.Collection();

Users.model = User;

module.exports = Users;
