const express = require('express');
const app = express();
const moment = require('moment');
const dateChecker = require('./modules/dateChecker.js');
moment().format();

let output ={ "unix": null, "natural": null };

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html', function(err) {
    if (err) throw err;
    console.log(dateChecker(562151515))
  });
});

app.get('/:data', function(req, res) {
  //res.send(req.params.data);
  let input = req.params.data;
  if(!(/\D/g.test(input))){
    //console.log('proceeding with unix - all digits input')
    let unixDate = input;
    let humanDate = moment.unix(input);
    output.natural = moment(humanDate).format('MMMM DD, YYYY');
    output.unix = Number(input);
    res.send(output);
  } else {
    //perform validation
    if (moment(input).isValid()){
      output.natural = moment(input).format('MMMM DD, YYYY');
      output.unix =  Number(moment(input).format('X'));
      res.send(output);
    } else {
      output.natural = null;
      output.unix =  null;
      res.send(output);
    }
  }
});

app.listen(3000);