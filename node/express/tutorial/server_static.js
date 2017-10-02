var express = require("express");
var path = require("path");
var app = express();
//console.log(__dirname);
//console.log(path.join(__dirname, 'public'));
app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));
/*app.get("/", function(req, res){
    res.end();
});*/

app.listen(process.argv[2]);