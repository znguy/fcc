var mongoClient = require("mongodb").MongoClient;
var dbUrl = "mongodb://localhost:27017/learnyoumongo";
var collectionName = "prices";
var size = process.argv[2].toUpperCase();


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
    findAverage(db, collectionName, size);
}

function findAverage(db, collectionName, searchAge) {
    var matchCriteria = {"$match": {"size":size}};
    var groupCriteria = {"$group":{
        "_id":"averagePrice",
        "averagePrice" : {
            $avg : "$price"
        }
    }};
    
    var pipeline = [matchCriteria, groupCriteria];
    var collection = db.collection(collectionName);
    collection.aggregate(pipeline).toArray(function(err, results){
        if(err){
            console.log(err);
            return;
        }
        console.log(Number(results[0].averagePrice).toFixed(2));
        
    });
}

function endProgram(db){
    db.close();
}

/*

price doc sample : 

   {
      "name": "Tshirt",
      "size": "S",
      "price": 10,
      "quantity": 12
      "meta": {
        "vendor": "hanes",
        "location": "US"
      }
    }


*/