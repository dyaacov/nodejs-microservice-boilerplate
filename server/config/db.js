var config = require('./config');
var mongoose = require('mongoose');

var dbURI = process.env.DATABASE_URL || config.db_url;

mongoose.connect(dbURI, {
  useMongoClient: true
});

mongoose.connection.on('connected', function () {
    console.log('Mongoose> connected: ' + dbURI);
});

mongoose.connection.on('error',function (err) {
    console.log('Mongoose> error: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose> disconnected');
});

process.on('SIGINT', function() {
    mongoose.connection.close(function () {
        console.log('Mongoose> SIGINT - terminating...');
        process.exit(0);
    });
});

var db = mongoose.connection;
module.exports = db;

