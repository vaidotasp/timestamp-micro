const express = require('express');
const app = express();
const moment = require('moment');
moment().format();

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html', function(err) {
    if (err) throw err;
  });
});

app.get('/:data', function(req, res) {
  res.send(req.params.data);
  let input = req.params.data;
  //check if the input is valid =
  let date = moment(1502153434 * 1000); //unix time to normal time converted
  console.log(moment(date).format('MMMM Do YYYY, h:mm:ss a'));

  //check if it is unix time

  //check if it is human time

  //output both

  if (/\D/g.test(input)) //check if input contains at least one digit
    console.log(/\D/g.test(input));
})

app.listen(3000);