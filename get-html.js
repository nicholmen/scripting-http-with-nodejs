 // ultimate objective is to write an HTTPS client that reads and prints HTML from a specified host and path.
// invoke (call) the function you wrote.


var https = require('https');    

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

// This function should use a buffering technique to append each chunk of data to a variable as it is received, and then console.log the data once all of the data has been received.
// this function accepts a paramater, options, which is an object that contains values for the host and path, exactly like requestOptions


function getHtml (options, callback) {
  var body = ''
    
  //http response callback
  https.get(requestOptions, function (response) {
    // use utf-8 encoding
    response.setEncoding('utf8');
    
    // on reception of data, append each chunk to a variable
    response.on('data', function(data) {
      body += data
    });

    response.on('end', function() {
      callback(body)
    });
  });
}

function printHtml (html) {
  console.log(html)
}
getHtml(requestOptions, printHtml);