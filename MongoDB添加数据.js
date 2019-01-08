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

    db.collection('user').insertOne({
        name:'张三打野',
        age:111
    },(err,result)=>{
        console.timeEnd('start')
        console.timeEnd('add')
        if(!err) console.log('增加成功')
        client.close()
    })
})