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
  https.get(getAndPrintHTMLChunks, function (response) {
    response.on('data', function (data) {
      console.log('chunk received: + \n' + data + '\n');
    })

  })

}