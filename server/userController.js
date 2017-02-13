var User = require('./model/user.js');
var Users = require('./collections/users');
var Organizer = require('./model/organizer.js');
var Organizers = require('./collections/Organizers');
var Event = require('./model/event.js');
var Events = require('./collections/events');
var util = require('../lib/utility.js');
var jwt = require('jwt-simple');

module.exports = {
		signup:function (req,res) {
    
      console.log(req.username)



		  var username  = req.body.username;
      //console.log(username)
         // var password  = req.body.password;
          var email     = req.body.email;
          var eventtype = req.body.eventtype
		  var hashedpass = util.hashpass(req.body.password,function(hash){
		    hashedpass = hash;
		  });
	    new User({ username: username }).fetch().then(function(found) {
	    if (found) {
	      res.status(200).send("this user is already existed");
	    } else {
	        Users.create({
	          username: username,
	          password: hashedpass,
	          email: email,
	          eventtype: eventtype

	        })
	        .then(function(newUser) {
            console.log(newUser)
	          // var token = jwt.encode(newUser, 'secret');
	          // res.json({token: token});
	          res.send(newUser);
	        });
	      }
	  });
	},

 signin : function(req,res) {
    
  var email     = req.body.email; 
  var password  = req.body.password;
  var hashedpass = util.hashpass(password,function(hash){
    hashedpass = hash;
  });
    new User({ email: email }).fetch().then(function(found) {
    if (found) {
      var userHash = found.get('password');
      util.comparePass(password,userHash,function(exist){
        if(exist){
       
          response.status(200).send("done");
          var token = jwt.encode(found, 'secret');
          response.json({token: token});
        }else{
          response.send("password is not correct");
        }
      })  
    } else {
      response.status(200).send("Username is not exist");
      
      }
  });
 }



};


