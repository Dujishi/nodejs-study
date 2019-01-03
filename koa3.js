const Koa = require('koa')
const router = require('koa-router')() //引入实例化路由
const app = new Koa()

router
.get('/',(ctx,next)=>{
    ctx.body = 'Hello Koa'
})    
.get('/news/:aid',(ctx,next)=>{
    console.log(ctx.params)
   
    ctx.body = `新闻page`
})

app
.use(router.routes())  //启动路由
.use(router.allowedMethods())
.listen(3000,()=>{
    console.log('start at port 3000') 
})