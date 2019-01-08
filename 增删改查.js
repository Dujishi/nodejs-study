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

//编辑人员
.get('/edit',async (ctx,next)=>{
    //获取用户信息
    let id = ctx.query.id
    let data = await Db.find('user',{'_id':Db.getObjectId(id)})

    await ctx.render('edit',{
        list:data[0]
    })
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

//执行编辑操作
.post('/doEdit',async (ctx,next)=>{
    let id = ctx.request.body.id
    let name = ctx.request.body.name
    let sex = ctx.request.body.sex
    let age = ctx.request.body.age

    let data=await Db.update('user',{'_id':Db.getObjectId(id)},{
        name,age,sex
    });

    try{
        if(data.result.ok){
            ctx.redirect('/')
        }
    }catch(err){
        console.log(err)
    }
}) 

//执行删除操作
.get('/doRemove',async (ctx,next)=>{
    let id = ctx.query.id
    console.log(id)
    let data=await Db.remove('user',{'_id':Db.getObjectId(id)});

    try{
        if(data.result.ok){
            ctx.redirect('/')
        }
    }catch(err){
        console.log(err)
    }
}) 


app
.use(router.routes())  //启动路由
.use(router.allowedMethods())
.listen(3000,()=>{
    console.log('start at port 3000') 
})