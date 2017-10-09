var https = require('https');    
var getHtml = require('./http-functions.js')

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHtml (html) {
  console.log(html)
}



getHtml(requestOptions, printHtml);