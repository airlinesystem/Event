var express = require ('express');
var partials = require('express-partials');
var bodyParser = require('body-parser');
var app = express();
// app.use(require('connect').bodyParser());
//app.use(express.bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/client'));

module.exports = app;
