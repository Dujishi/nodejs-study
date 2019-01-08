const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()
const views = require('koa-views')
const Db = require('./module/db')
const render = require('koa-art-template')
const path = require('path')
const bodyParser = require('koa-bodyparser')


//配置post提交数据的中间件
app.use(bodyParser())
//配置模板引擎中间件
render(app,{
    root:path.join(__dirname,'views'),
    extname:'.html'
})

//显示人员信息
router
.get('/',async (ctx,next)=>{
    let result = await Db.find('user',{})
    await ctx.render('index',{
        list:result
    })
})    

//新增人员
.get('/add',async (ctx,next)=>{
    await ctx.render('add')
})  

//执行新增操作
.post('/doAdd',async (ctx,next)=>{
    let data=await Db.insert('user',ctx.request.body);
    try{
        if(data.result.ok){
            ctx.redirect('/')
        }
    }catch(err){
        return;
        ctx.redirect('/add');
    }
})  


app
.use(router.routes())  //启动路由
.use(router.allowedMethods())
.listen(3000,()=>{
    console.log('start at port 3000') 
})