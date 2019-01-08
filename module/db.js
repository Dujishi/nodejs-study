//DB库

var MongoClient = require('mongodb').MongoClient
var Config = require('../module/config')

class Db{

  static getInstance(){  //单例解决多次实例化重连数据的问题
    if(!Db.instance){
      Db.instance = new Db()
    }
    return Db.instance
  }
  constructor(){
    this.dbClient = ''
    this.connect()

  }

  connect(){
    return new Promise((resolve,reject)=>{
      if(!this.dbClient){
        MongoClient.connect(Config.dbUrl,(err,client)=>{
          if(err){
           reject(err)
          }else{
            var db = client.db(Config.dbName)
            this.dbClient = db
            resolve(db)
          }
        })
      }else{
        resolve(this.dbClient)
      }
    })
  }

  add(){

  }
  delete(){

  }
  update(){

  }

  find(collectionName,json){
   return new Promise((resolve,reject)=>{
    this.connect().then((db)=>{
      var result = db.collection(collectionName).find(json)
      result.toArray((err,docs)=>{
        if(err) reject(err)
        resolve(docs)
      })
    })
   })
  }

 

 
}

module.exports = Db.getInstance()