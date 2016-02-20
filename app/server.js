var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');

// use body parser so we can grab information from POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configure our app to handle CORS requests
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
  next();
});

// log all requests to the console 
app.use(morgan('dev'));

// set static files location
// used for requests that our frontend will make
app.use(express.static(__dirname + './../public'));

// routing all non-api requests to frontend
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + './../public/app/views/index.html'));
});

// start the server
app.listen(process.env.PORT || 8000);