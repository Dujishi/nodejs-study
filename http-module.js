//引入http模块
var http = require('http')

//创建服务
http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type':'text/html;charset="utf-8"'})
    response.write('你好,nodejs')
    response.write('我是第一个nodejs程序')
    response.end()
}).listen(8001)
