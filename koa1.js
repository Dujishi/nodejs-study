const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

router
.get('/',(ctx,next)=>{
    ctx.body = 'Hello Koa'
})    
.get('/news',(ctx,next)=>{
    ctx.body = '新闻page'
})

app
.use(router.routes())  //启动路由
.use(router.allowedMethods())
.listen(3000,()=>{
    console.log('start at port 3000') 
})