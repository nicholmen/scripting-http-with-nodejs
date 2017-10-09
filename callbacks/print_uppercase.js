//Transforms the html string into ALL CAPS and prints it to the console.

var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

// function printUpperCase (html) {

//   /* Write your code here! */

// }

getHTML (requestOptions, function(result) {console.log(result.toUpperCase())})
