var express = require("express");
var app  = express();
var bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended: false}));
app.post("/form", function(req, res){
    var result  = req.body.str.split('').reverse().join('');
    res.end(result);
});

app.listen(process.argv[2], process.env.IP);
