// directory listing module, lists filtered file names based on extension.

module.exports = fileNamesFilter;

 var fs = require('fs')
 var path = require('path')
 
 //var fileNamesFilter = function(args){
 function fileNamesFilter(folder, fileExtension, callback){
  
  var ext = "."+ fileExtension;
   var result = [];
   fs.readdir(folder, function(error, list){
    if(error){
     return callback(error);
    }
    
    list.forEach(function(fileName){
     if(path.extname(fileName) === ext){
      result.push(fileName);
     }
    });
    return callback(error, result);
    
   });
 }