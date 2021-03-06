const Koa = require('koa')
const router = require('koa-router')() //引入实例化路由
const app = new Koa()

//中间件会匹配任何路由，不谢next不会往下匹配
app.use(async (ctx,next)=>{
    console.log(new Date())
    next()
})

router 
.get('/',(ctx,next)=>{
    ctx.body = 'Hello Koa'
})    
.get('/news',async (ctx,next)=>{
    ctx.body = `新闻page`
    await next()
})
.get('/news',(ctx,next)=>{
    console.log('新闻page')
})

app
.use(router.routes())  //启动路由
.use(router.allowedMethods())
.listen(3000,()=>{
    console.log('start at port 3000') 
})