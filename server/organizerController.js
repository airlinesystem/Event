//var User = require('./model/user.js');
//var Users = require('./collections/users');
var Organizer = require('./model/organizer.js');
var Organizers = require('./collections/Organizers');
//var Event = require('./model/event.js');
//var Events = require('./collections/events');
var util = require('../lib/utility.js');
var jwt = require('jwt-simple');

module.exports = {
		signup:function (req,res) {
    
      console.log(req.body)
//console.log(req.email)

		  var orgName  = req.body.orgName;
      //console.log(username)
         // var password  = req.body.password;
          var email     = req.body.email;
         // var eventtype = req.body.eventtype
		  var hashedpass = util.hashpass(req.body.password,function(hash){
		    hashedpass = hash;
		  });
	    new Organizer({ orgName: orgName }).fetch().then(function(found) {
	    if (found) {
	      res.status(200).send("this orgName is already existed");
	    } else {
	        Organizers.create({
	          orgName: orgName,
	          password: hashedpass,
	          email: email,

	        })
	        .then(function(newOrg) {
            console.log(123)
            console.log(newOrg.attributes.id)
	           var token = jwt.encode(newOrg, 'secret');
            res.json({token: token});
	          //res.send(newOrg);
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
    new Organizer({ email: email }).fetch().then(function(found) {
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
      response.status(200).send("OrgName is not exist");
      
      }
  });
 }



};


