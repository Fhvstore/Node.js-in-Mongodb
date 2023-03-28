var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/newtest";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = [
      { user: 'John', address: 'Highway 71'},
      { user: 'Peter', address: 'Lowstreet 4'},
      { user: 'Amy', address: 'Apple st 652'},
      { user: 'Hannah', address: 'Mountain 21'},
      { user: " "}
    ];
    dbo.collection("customers").insertMany(myobj, function(err, res) {
      if (err) throw err;
      console.log("Number of documents inserted: " + res.insertedCount);
      db.close();
    });
  });