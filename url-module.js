//引入http模块
var http = require('http')
var url = require('url')


//创建服务
http.createServer((request,response)=>{

    response.writeHead(200,{'Content-Type':'text/html;charset="utf-8"'})
    
    if(request.url!=='/favicon.ico'){
        var query = url.parse(request.url,true)
        console.log(query.query)
    }
    
    
    
    response.end()
}).listen(8001)