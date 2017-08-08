const moment = require('moment');

module.exports = function(input) {
  let output = { "unix": null, "natural": null };
  if(!(/\D/g.test(input))){
    output.unix = Number(input);
    output.natural = moment.unix(input).format('MMMM DD, YYYY');
    return output;
  } else {
    if (moment(input).isValid()){
      output.unix = Number(moment(input).format('X'));
      output.natural = moment(input).format('MMMM DD, YYYY');
      return output;
    } else {
      return { "unix": null, "natural": null };
    }
  }
}

/*if(!(/\D/g.test(input))){
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
});*/