// listens on given port and returns json for iso time provided in the query paramater

//res.writeHead(200, { 'content-type': 'text/plain' })

var url = require("url");
var http = require("http");

var portNumber = Number(process.argv[2]);

var httpServer = http.createServer(requestListner);
httpServer.listen(portNumber);

function requestListner(request, response){
    
    var requestData = url.parse(request.url, true);
    //console.log(requestData);
    if(requestData.pathname === '/api/parsetime'){
        return getParsedTimeAsJson(requestData, response);
    } else if(requestData.pathname === '/api/unixtime'){
        return getEpochJson(requestData, response);
    }
}


function getParsedTimeAsJson(requestData, response){
    response.writeHead(200, { 'Content-Type': 'application/json' })  ;
    var isoParam = requestData.query.iso;
    var date = new Date(isoParam);
    var result = {"hour": date.getHours() , "minute": date.getMinutes(), "second": date.getSeconds()};
    response.end(JSON.stringify(result));
}

function getEpochJson(requestData, response){
    response.writeHead(200, { 'Content-Type': 'application/json' }) ;
    var isoParam = requestData.query.iso;
    var date = new Date(isoParam);
    var result = {"unixtime" : date.getTime()};
    response.end(JSON.stringify(result));
    
}

/*
 official solution  
 
 
    var http = require('http')
    var url = require('url')
    
    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }
    
    function unixtime (time) {
      return { unixtime: time.getTime() }
    }
    
    var server = http.createServer(function (req, res) {
      var parsedUrl = url.parse(req.url, true)
      var time = new Date(parsedUrl.query.iso)
      var result
    
      if (/^\/api\/parsetime/.test(req.url)) {
        result = parsetime(time)
      } else if (/^\/api\/unixtime/.test(req.url)) {
        result = unixtime(time)
      }
    
      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))
    
    

*/