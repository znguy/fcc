var mongoClient = require("mongodb").MongoClient;
var dbUrl = "mongodb://localhost:27017/learnyoumongo";

var collectionName = "parrots";
var searchAge = parseInt(process.argv[2]);


function initProgram(mongoClient){
    mongoClient.connect(dbUrl, onDbConnect);
}

initProgram(mongoClient);

function onDbConnect(err, db){
    if(err) throw err;
    
    processStuff(db);
    endProgram(db);
    
}

function processStuff(db){
    findCount(db, collectionName, searchAge);
}

function findCount(db, collectionName, searchAge) {
    
    var parrots = db.collection(collectionName);
    parrots.count({"age": {"$gt":searchAge}}, function(err, count){
        if(err){
            console.log(err);
            return;
        } 
        console.log(count)
        
    });
}

function endProgram(db){
    db.close();
}