var fs = require('fs');
var fileName = process.argv[2];
var chrIndex = 0;
function countNewlinesAndLog(content){

    var cnt = 0 ;
    for(chrIndex in content){
        if(content[chrIndex] == '\n'){
            cnt += 1;
        
        }
    
    }
    console.log(cnt);
}


fs.readFile(fileName, function(error, content){
    countNewlinesAndLog(content.toString());

});