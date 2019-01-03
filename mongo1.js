var  express = require('express')
var MongoClient = require('mongodb').MongoClient
var app = express()

var shujukuURL = 'mongodb://localhost:27017/admin'

app.get('/',(req,res)=>{
    MongoClient.connect(shujukuURL,{useNewUrlParser: true },(err,client)=>{
        res.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'})
        if(err){
            res.send('数据库连接失败')
            return false
        }
        res.write('恭喜！数据库连接成功\n')
        var db = client.db('admin')
        db.collection('address').insertOne({'name':'示例数据','address':'客户端插入的数据'},(err,result)=>{
            if(err){
                res.send('数据库写入失败')
                return false
            }
            res.write('数据库写入成功')
            // db.close()
            res.end()
        })
    })
}).listen(3000)