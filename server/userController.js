var User = require('./model/user.js');
var Users = require('./collections/users');
// var jwtDecode = require('jwt-decode');
//var Organizer = require('./model/organizer.js');
//var Organizers = require('./collections/Organizers');
//var Event = require('./model/event.js');
//var Events = require('./collections/events');
var util = require('../lib/utility.js');
var jwt = require('jwt-simple');

module.exports = {
		userSignup:function (req,res) {

    
      console.log(req.username)



		  var username  = req.body.username;
      //console.log(username)
         // var password  = req.body.password;
          var email  = req.body.email;
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
	          var token = jwt.encode(newUser, 'secret');
	          res.json({token: token});
	          //res.send(newUser);
	        });
	      }
	  });
	},

 signin : function(req,res) {

    
  var email     = req.body.email; 
  var password  = req.body.password;
  console.log(password)
  var hashedpass = util.hashpass(password,function(hash){
    hashedpass = hash;
  });
    new User({ email: email }).fetch().then(function(found) {
    if (found) {
      // console.log(found)
      var userHash = found.get('password');
      util.comparePass(password,userHash,function(exist){
        if(exist){
       
          // res.status(200).send("done");
          console.log(res.status)
          var token = jwt.encode(found, 'secret');
          res.json({token: token});
          // var decoded = jwt.decode(token, 'secret')
        //   var decoded = jwt.decode(token);
          // console.log(decoded)
        }else{
          res.send("password is not correct");
        }
      })  
    } else {
      // console.log("lklk")
      res.status(200).send("Username is not exist");
      
      }
  });
 }



};


