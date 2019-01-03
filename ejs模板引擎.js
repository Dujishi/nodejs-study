const Koa = require('koa')
const router = require('koa-router')() //引入实例化路由
const app = new Koa()
const views = require('koa-views')

//配置模板引擎中间件
app.use(views('views',{
    extension:'ejs'  //应用模板引擎
}))



router
.get('/',async (ctx,next)=>{
    let title = '你好ejs'
    let list = [111,222,333]
    await ctx.render('index',{
        title,
        list
    })
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