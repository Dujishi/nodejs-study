const Koa = require('koa')
const router = require('koa-router')() //引入实例化路由
const app = new Koa()
const views = require('koa-views')
const serve = require('koa-static')

//配置模板引擎中间件
app.use(views('views',{
    extension:'ejs'  //应用模板引擎
}))

//配置静态资源中间件
app.use(serve(__dirname+'/static'))


router
.get('/',async (ctx,next)=>{
    let title = '你好ejs'
    let list = [111,222,333]
    console.log(__dirname)
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