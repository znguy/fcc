var express = require("express");
var app = express();


app.use(require("stylus").middleware(process.argv[3] || (__dirname + "/stylus")));
app.use(express.static(process.argv[3] || (__dirname + "/stylus")));

app.listen(process.argv[2], process.env.IP);