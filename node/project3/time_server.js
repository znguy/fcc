// listens on port provided as command line argument and returns the time in format - YYYY-MM-DD hh:mm
var net = require("net");
var strftime = require("strftime");

var portNumber = process.argv[2];

var timeFormat =  "%F %H:%M"//"YYYY-MM-DD hh:mm"

var timeServer = net.createServer(listener);
timeServer.listen(portNumber);

function listener(socket){
    socket.write(getCurrentTIme(timeFormat) + "\n");
    socket.end();
}

function getCurrentTIme(timeFormat){
    var date = new Date();
    return strftime(timeFormat, date);
}