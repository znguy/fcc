var http = require("http");
var fs =  require("fs");

var portNumber = process.argv[2];
var fileLocation = process.argv[3];


var fileServer = http.createServer(fileServerRequestListener);
fileServer.listen(portNumber);
var fileContentStream = fs.createReadStream(fileLocation);

function fileServerRequestListener(request, response){
    fileContentStream.pipe(response);
}


/*

official solution :

var http = require('http')
    var fs = require('fs')
    
    var server = http.createServer(function (req, res) {
      res.writeHead(200, { 'content-type': 'text/plain' })
    
      fs.createReadStream(process.argv[3]).pipe(res)
    })
    
    server.listen(Number(process.argv[2]))
    
    

*/