var mongoClient = require("mongodb").MongoClient;
var dbUrl = "mongodb://localhost:27017/learnyoumongo";
var firstName = process.argv[2];
var lastName = process.argv[3];

mongoClient.connect(dbUrl, connectionHandler);


function connectionHandler(err, db){
    if(err) throw err;
    
    initProgram(db);
    
}

function initProgram(db){
    insertDoc(db);
    db.close();
}
function insertDoc(db){
    var docs = db.collection("docs");
    var newDoc = {'firstName' : firstName, 'lastName': lastName};
    console.log(JSON.stringify(newDoc));
    docs.insert(newDoc, function(err, data){if(err) console.log(err)});
}