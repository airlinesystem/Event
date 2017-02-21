var Event = require('./model/event.js');
var Events = require('./collections/events');
var Users = require('./collections/users.js');
var jwt = require('jwt-simple');
var nodemailer = require('nodemailer');

module.exports = {


    addEvent:function (req,res) {
    var decoded = jwt.decode(req.body.tok, 'not your bussines!!')

          var eventName    = req.body.eventName;
          var type         = req.body.type;
          var location     = req.body.location;
          var date         = req.body.date.split("").splice(0,10).join("");
          var cost         = req.body.cost;
          var organizerId  = decoded.id;
          var orgMob       = req.body.orgMob;
          var orgWebsite   = req.body.orgWebsite;
          var location2    = req.body.location2;
      console.log(req.body)
      new Event({ eventName: eventName }).fetch().then(function(found) {
      if (found) {
        res.status(200).send("this event is already existed");
      } else {
          Events.create({
            eventName   : eventName,
            type        : type,
            location    : location,
            date        : date,
            cost        : cost,
            organizerId : organizerId,
            orgMob      : orgMob,
            orgWebsite  : orgWebsite,
            location2   : location2
          })
          .then(function(newEvent) {
            Users
            .reset()
            .fetch()
            .then(function(data) {
                console.log(data)
                var emails=[];
                for(var i=0; i<data.models.length; i++){
                  emails.push(data.models[i].attributes.email);
                }
                console.log(emails)
                var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                user: 'events.planing.rbk@gmail.com', // Your email id
                pass: 'Events.Planning' // Your password
                    }
                });

                var mailOptions = {
                  from: 'events.planning.rbk@gmail.com', // sender address
                  to: emails, // list of receivers
                  subject: 'Email Example', // Subject line
                  text: "Hello World!"
                  //html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
                };

                transporter.sendMail(mailOptions, function(error, info){
                  if(error){
                      console.log(error);
                  }else{
                      console.log('Message sent: ' + info.response);
                  };
                });
            });
            res.send(newEvent);
          });
        }
    });
  

    },

getAllEventOrg : function(req,res){
  var tok = jwt.decode(req.query.tok, 'not your bussines!!')
    Events.reset().fetch().then(function(events){
      var Orgevents=[];
      for(var i=0;i<events.models.length;i++){
        if(tok.id===events.models[i].attributes.organizerId){
          Orgevents.push(events.models[i].attributes);
        }
      }
      res.json(Orgevents)
     })

},

getAllEventUser : function(req,res){
  var tokk = jwt.decode(req.query.tok, 'not your bussines!!')
    Events.reset().fetch().then(function(events){
      var UserEvents=[];
      for(var i=0;i<events.models.length;i++){
        if(tokk.eventtype===events.models[i].attributes.type){
          UserEvents.push(events.models[i].attributes);
        }
      }
      res.json(UserEvents)
     })

}



};


