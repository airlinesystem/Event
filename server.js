var app = require ('./event.js');
var express = require ('express');

require('./server/routes.js')(app , express);
var port = 8080;
app.listen(process.env.PORT || port);
console.log('Server now listening on port' + port);
