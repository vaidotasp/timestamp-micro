const express = require('express');
const app = express();

const dateChecker = require('./modules/dateChecker.js');


app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html', function(err) {
    if (err) throw err;
  });
});

app.get('/:data', function(req, res) {
  res.send(dateChecker(req.params.data));
});

app.listen(3000);