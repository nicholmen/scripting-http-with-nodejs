//Reverses the html string and then prints it to the console.

var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

getHTML (requestOptions, function(result) {console.log(result.split('').reverse().join(''))})