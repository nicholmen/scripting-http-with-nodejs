//the exact opposite of the former - transforms the html string into poetic lowercase and prints it to the console.

var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

getHTML (requestOptions, function(result) {console.log(result.toLowerCase())})