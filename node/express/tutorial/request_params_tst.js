var express = require("express");
var app = express();


app.get("/search", function(req, res){
    res.send(req.query);
    //console.log(req.query);
});

app.listen(process.argv[2], process.env.IP);