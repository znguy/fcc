var express = require("express");
var app = express();
var fs = require("fs");

var fileName = process.argv[3];
var port = process.argv[2];
var ip = process.env.IP;
function readFileAndRespond(req, res){
    //res.json(JSON.parse(getFileContent(fileName)));
    var fileContent = null;
    fs.readFile(fileName, function(error, content){
        fileContent = content.toString();
        res.send(JSON.parse(fileContent));
    });
}

/*function getFileContent(fileName){
    var fileContent = null;
    fs.readFile(fileName, function(error, content){
        fileContent = content.toString();
        console.log(fileContent);
    });
    console.log(fileContent);
    return fileContent;
}*/

app.get("/books", readFileAndRespond);
app.listen(port, ip);

// official
/*

 var express = require('express')
    var app = express()
    var fs = require('fs')
    
    app.get('/books', function(req, res){
      var filename = process.argv[3]
      fs.readFile(filename, function(e, data) {
        if (e) return res.send(500)
        try {
          books = JSON.parse(data)
        } catch (e) {
          res.send(500)
        }
        res.json(books)
      })
    })
    
    app.listen(process.argv[2])


*/