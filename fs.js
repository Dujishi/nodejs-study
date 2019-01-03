//引入http模块
var fs = require('fs')

var data = '我是数据库的数据'

var writeStream = fs.createWriteStream('output.text')
writeStream.write(data,'utf-8')
writeStream.end()
writeStream.on('finish',()=>{
    console.log('写入完成')
})
