var fs = require('fs');
var fileName  = process.argv[2];
var buffer = fs.readFileSync(fileName);
var cnt = 0;
var content =  buffer.toString();
var chrIndex = 0;
for(chrIndex in content){
    //console.log(buffer[chrIndex]);
    if(content[chrIndex] == '\n'){
        
        cnt+=1;
    
    }

}
console.log(cnt);