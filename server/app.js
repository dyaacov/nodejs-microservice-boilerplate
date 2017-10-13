const express = require('express');
const app = express();
const bodyParser= require('body-parser')
var mongoose = require('mongoose');
var config = require('./config/config');
var Author = require('./models/author')

app.use(bodyParser.json())

/////////////////////////
//  ROUTES SETUP      //
////////////////////////
var apiRoutes = express.Router(); 
app.use('/api', apiRoutes);

// route middleware to verify a token
apiRoutes.use(function(req, res, next) {
  //TODO call security service to validate token
  console.log('token is valid')
  next(); 
});


/////////////////////////
//  DATABASE SETUP    //
////////////////////////
var db = require('./config/db');
port = process.env.PORT || config.server_port
app.listen(port, () => {
  console.log('listening on ' + port)
})


/////////////////////////
//  APIs.              //
////////////////////////

app.get('/api/test', function(req, res) {
    res.send('test api');
});

app.get('/author', function(req, res) {
  var bob = new Author({ first_name: 'Bob', family_name: 'Smith' });
  bob.save(function (err, Author) {
      if (err) return handleError(err);
      res.send(Author);
  });
});

app.get('/authors', function(req, res) {
    Author.find(function (err, authors) {
      if (err) return handleError(err);
      res.send(authors);
    })
});
