// returns converts and returns post content data from body into uppercase

var http = require("http");
var map = require("through2-map");

var portNumber = Number(process.argv[2]);

var httpServer = http.createServer(uppercasererListener);
httpServer.listen(portNumber);


function uppercasererListener(request, response){
    if(request.method !== 'POST'){
        return response.end("please use post.");
    }
    request.pipe(map(function(chunk){
        return chunk.toString().toUpperCase();
    })).pipe(response);
    
}