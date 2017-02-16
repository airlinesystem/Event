var path = require('path');
var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: path.join(__dirname, '../db/event.sqlite')
  },
  useNullAsDefault: true
});
var db = require('bookshelf')(knex);
db.knex.schema.hasTable('users').then(function(exists){
  if(!exists){
    db.knex.schema.createTable('users',function (user){
      user.increments('id').primary();
      user.string('username',100);
      user.string('eventtype',255);
      user.string('email',100);
      user.string('password',255);
      user.timestamps();
    }).then(function(table){
      console.log('created Table',table);
    });
  }
});

db.knex.schema.hasTable('organizers').then(function(exists){
  if(!exists){
    db.knex.schema.createTable('organizers',function (organizer){
      organizer.increments('id').primary();
      organizer.string('orgName',100);
      // organizer.string('orgTel',100);
      // organizer.string('orgWebsite',100);
      organizer.string('email',100);
      organizer.string('password',255);
      organizer.timestamps();
    }).then(function(table){
      console.log('created Table',table);
    });
  }
});

db.knex.schema.hasTable('events').then(function(exists){
  if(!exists){
    db.knex.schema.createTable('events',function (event){
      event.increments('id').primary();
      event.string('eventName',100);
      event.string('type',100);
      event.string('location',100);
      event.string('date',100);
      event.string('cost',100);
      event.string('orgMob',100);
      event.string('orgWebsite',100);
      event.integer('organizerId');
      event.timestamps();
    }).then(function(table){
      console.log('created Table',table);
    });
  }
});


module.exports = db;