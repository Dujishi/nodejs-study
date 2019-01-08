var Db = require('./module/db')
Db.find('user',{'name':'lisi'}).then((data)=>{
    console.log(data)
  })