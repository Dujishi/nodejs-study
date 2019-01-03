const Koa = require('koa')
const router = require('koa-router')() //引入实例化路由
const views = require('koa-views')
const app = new Koa()
const common = require('./module/common.js')


//配置模板引擎中间件
app.use(views('views',{
    extension:'ejs'  //应用模板引擎
}))

router 
.get('/login',async (ctx,next)=>{
    console.log('login page')
    await ctx.render('form')
})    
.post('/doLogin',async (ctx,next)=>{
    let data = await common.getPostData(ctx)
    ctx.body = data
})

app
.use(router.routes())  //启动路由
.use(router.allowedMethods())
.listen(3000,()=>{
    console.log('start at port 3000') 
})