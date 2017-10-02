var express = require("express");
var app = express();
var crypto = require("crypto");


function getSha1ForDateAndId(id){
    return crypto.createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex');
}
function handleMsg(request, response){
    response.end(getSha1ForDateAndId(request.params.id));
}

app.put("/message/:id", handleMsg);
app.listen(process.argv[2], process.env.IP);