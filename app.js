var Db = require('./module/db')


Db.find('user',{'name':'lisi'}).then((data)=>{
    console.log(data)
})

  Db.insert('user',{
    'name':'lisi',
    'age':66
  }).then((data)=>{
  console.log('插入成功')
  }).catch(err=>{
    console.log(err)
  })

  Db.update('user',{
    'name':'lisi',
    'age':66
  },{'name':'dujishi666'}).then((data)=>{
  console.log('更新成功')
  }).catch(err=>{
    console.log(err)
  })

  Db.remove('user',{
    'name':'张三打野',
  }).then((data)=>{
  console.log('删除成功')
  }).catch(err=>{
    console.log(err)
  })

