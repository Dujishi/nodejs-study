const Koa = require('koa')
const router = require('koa-router')() //引入实例化路由
const views = require('koa-views')
const app = new Koa()
const bodyParser = require('koa-bodyparser')



//配置模板引擎中间件
app.use(views('views',{
    extension:'ejs'  //应用模板引擎
}))

//配置post bodyParser 中间件
app.use(bodyParser())

//中间件会匹配任何路由，不谢next不会往下匹配
// app.use(async (ctx,next)=>{
//    next()
//    if(ctx.status === 404){
//        ctx.body="404"
//    }
// })

router 
.get('/login',async (ctx,next)=>{
    console.log('login page')
    await ctx.render('form')
})    
.post('/doLogin',async (ctx,next)=>{
    ctx.body= ctx.request.body
})

app
.use(router.routes())  //启动路由
.use(router.allowedMethods())
.listen(3000,()=>{
    console.log('start at port 3000') 
})