const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const people = require('./routes/people');
const connection = require('./connection');

var app = express();

connection.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

app.use('/people', people);

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.listen(3000);
