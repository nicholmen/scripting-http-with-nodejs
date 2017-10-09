// ultimate objective is to write an HTTPS client that reads and prints HTML from a specified host and path.
// invoke (call) the function you wrote.

var https = require('https');    

// This function should use a buffering technique to append each chunk of data to a variable as it is received, and then console.log the data once all of the data has been received.

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function getAndPrintHTML (options) {
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
      console.log(body);
    });
  });
}
getAndPrintHTML(requestOptions);