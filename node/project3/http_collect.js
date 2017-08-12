var http = require("http");

http.get(process.argv[2], function(response){
    var numOfChars = 0;
    var fullText = "";
    response.setEncoding("utf8");
    
    response.on("data", function(data){
        numOfChars += data.length;
        fullText += data;
    });
    
    response.on("error", function(error){
        console.log(error);
    });
    response.on("end", function(){
       console.log(numOfChars);
       console.log(fullText);
    });
});