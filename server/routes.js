var userController = require('./userController.js');
// var organizerController = require('../users/userController.js')



app.post('/api/signin', userController.signin);
app.post('/api/signup', userController.signup);
// app.get('/api/signedin', userController.checkAuth);
