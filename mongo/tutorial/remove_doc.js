var mongoClient = require("mongodb").MongoClient;

var dbUrl = "mongodb://localhost:27017/";
var collectionName = process.argv[3];
var dbName = process.argv[2];
var docId = process.argv[4];
function initProgram(mongoClient){
    mongoClient.connect(dbUrl+dbName, onDbConnect);
}

initProgram(mongoClient);

function onDbConnect(err, db){
    if(err) throw err;
    
    processStuff(db);
    endProgram(db);
    
}

function removeDoc(db, collectionName, docId){
    var collection = db.collection(collectionName);
    collection.remove({"_id": docId}, function(err){
        if(err){
            console.log(err);
        }
    });
}
function processStuff(db){
    removeDoc(db, collectionName, docId);
}

function endProgram(db){
    db.close();
}