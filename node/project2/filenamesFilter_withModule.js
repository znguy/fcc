var fileNamesFilter = require('./filenamesFilter');         // ".js" is optional


var folder = process.argv[2]
var ext =  process.argv[3]

fileNamesFilter(folder, ext, displayFilenames);

function displayFilenames(error, list){
    if(error){
        console.log(error);
        return;
    } 
    list.forEach(function(fileName){
        console.log(fileName);
    });
    
}