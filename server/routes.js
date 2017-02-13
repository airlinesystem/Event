var userController = require('./userController.js');
var organizerController = require('./organizerController.js');
var eventController = require('./eventController.js');
// var organizerController = require('../users/userController.js')

module.exports = function (app, express) {

app.post('/api/OrgSignup', organizerController.signup);
app.post('/api/userSignup', userController.userSignup);
app.post('/api/orgProfile', eventController.addEvent);
// app.get('/api/signedin', userController.checkAuth);
}