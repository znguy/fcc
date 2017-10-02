
var  mongoClient = require("mongodb").MongoClient;
var dbUrl = "mongodb://localhost:27017/";
var collectionName = "users";
var dbName = process.argv[2];
function initProgram(mongoClient){
    mongoClient.connect(dbUrl+dbName, onDbConnect);
}


initProgram(mongoClient);

function onDbConnect(err, db){
    if(err) throw err;
    
    startProgram(db);
    endProgram(db);
    
}

function startProgram(db){
    updateDoc(db);
}
function endProgram(db){
    db.close();
}

function updateDoc(db){
    var users = db.collection(collectionName);
    users.update({"username": "tinatime"},
        {$set:{"age": 40}},
        function(data){
            console.log(data);
        }
        );
    
}