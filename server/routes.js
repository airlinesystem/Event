var userController = require('./userController.js');
// var organizerController = require('../users/userController.js')

module.exports = function (app, express) {

app.post('/api/signin', userController.signin);
app.post('/api/signup', userController.signup);
// app.get('/api/signedin', userController.checkAuth);
}