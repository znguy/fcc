// takes directory name and file extension as input

var fs = require('fs');
var directoryPath = process.argv[2];
var fileExtension = process.argv[3];

fileExtension = "."+fileExtension;
fs.readdir(directoryPath, function(error, list){

    for(fileNameIndex in list){
        if(list[fileNameIndex].endsWith(fileExtension)){
            console.log(list[fileNameIndex]);
        }
    }
});
