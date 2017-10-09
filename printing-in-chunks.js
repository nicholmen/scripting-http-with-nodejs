// ultimate objective is to write an HTTPS client that reads and prints HTML from a specified host and path.
// invoke (call) the function you wrote.

var https = require('https');    

// getAndPrintHTMLChunks will utilize the https library to GET a given URL.
function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  // this function should console.log each chunk of data as it is received, concatenated with a newline character ('\n') so you can visualize each chunk.
  https.get(requestOptions, function (response) {
    // set encoding of received data to UTF-8
    response.setEncoding('utf8');
    
    response.on('data', function (data) {
      // the callback is invoked when a `data` chunk  is received
      console.log('chunk received: + \n' + data + '\n');
    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      console.log('Response stream complete.');
    });

  });
}
getAndPrintHTMLChunks();