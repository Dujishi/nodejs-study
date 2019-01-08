var MongoClient = require('mongodb').MongoClient
var dbUrl = 'mongodb://localhost:27017/'
var dbName = 'admin'

console.time('start')
MongoClient.connect(dbUrl,(err,client)=>{
    if(err){
        console.log(err)
        return 
    }
    var db = client.db(dbName)
    console.time('add')

    var data = db.collection('user').find({})
    console.log(data)
})