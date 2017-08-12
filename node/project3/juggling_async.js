var http = require("http");
var bl = require("bl");

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var urls = [url1, url2, url3];

function processAllUrls(urls){
    var responses = {responsesCnt:0, data:[]};
    for(var urlIndex in urls){
        responses.data.push("");
        processUrl(urlIndex, urls[urlIndex], responses);
    }
    
}

function processUrl(index, url, responses){
    http.get(url, function(response){
        response.pipe(bl(function(err, data){
            responses.responsesCnt += 1;
            if(err){
                console.log("error occured while fetching data for url - "+url+" for index - "+index);
                return console.error(err);
            }
            responses.data[index] = data.toString();
            if(responses.responsesCnt == responses.data.length){
                responses.data.forEach(function(response){
                   console.log(response); 
                });
            }
        }));
    });
}

processAllUrls(urls);