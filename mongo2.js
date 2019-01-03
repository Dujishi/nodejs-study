var  express = require('express')
var MongoClient = require('mongodb').MongoClient
var app = express()

var shujukuURL = 'mongodb://localhost:27017/admin'

app.get('/',(req,res)=>{
        MongoClient.connect(shujukuURL,{ useNewUrlParser: true },(err,client)=>{
            let db = client.db('address')
            if(err) return false
            db.collection('address').insertOne({
                'name':'train',
                'address':'suzhou'
            },(err,result)=>{
                if(err) return false
                db.close()
                res.redirect('/')
                res.end()
            })
        })
}).listen(3000)