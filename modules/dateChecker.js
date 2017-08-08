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
