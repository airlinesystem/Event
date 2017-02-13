//var User = require('./model/user.js');
//var Users = require('./collections/users');
//var Organizer = require('./model/organizer.js');
//var Organizers = require('./collections/Organizers');
var Event = require('./model/event.js');
var Events = require('./collections/events');
//var util = require('../lib/utility.js');
var jwt = require('jwt-simple');

module.exports = {
    addEvent:function (req,res) {
    console.log(req.body)
    //console.log(req.body.id)

      console.log(req.username)
        ////>>>>>>>>>>
      ////need to get org id from the token to know which org adding the event;

          var eventName     = req.body.eventName;
          var type          = req.body.type;
          var location      = req.body.location;
          var date          = req.body.date;
          var cost          = req.body.cost;
          var organizerId   = req.body.organizerId
      
      new Event({ eventName: eventName }).fetch().then(function(found) {
      if (found) {
        res.status(200).send("this event is already existed");
      } else {
          Events.create({
            eventName: eventName,
            type: type,
            location: location,
            date: date,
            cost: cost,
            organizerId: organizerId

          })
          .then(function(newEvent) {
              console.log(newEvent)
              //  var token = jwt.encode(newEvent, 'secret');
              // res.json({token: token});
            res.send(newEvent);
          });
        }
    });
  },





};


