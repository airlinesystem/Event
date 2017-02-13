var userController = require('./userController.js');
var organizerController = require('./organizerController.js');
// var organizerController = require('../users/userController.js')

module.exports = function (app, express) {

app.post('/api/OrgSignup', organizerController.signup);
app.post('/api/userSignup', userController.userSignup);
// app.get('/api/signedin', userController.checkAuth);
}