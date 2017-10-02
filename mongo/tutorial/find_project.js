var mongo = require("mongodb").MongoClient;

var dbUrl = "mongodb://localhost:27017/learnyoumongo";
var requiredAge = parseInt(process.argv[2]);
mongo.connect(dbUrl, function(err, db){
    if(err){
        console.log("err occurred while connecting to db");
    } else {
        findList(db);
        db.close();
    }
    
});


function findList(db){
    
    var parrotsCollection = db.collection('parrots');
    parrotsCollection.find({
        "age" : {"$gt": requiredAge}
    },{"age":1, "name":1, "_id":0}).toArray(function(err, docs){
        console.log(docs);
        
    });
    
}
