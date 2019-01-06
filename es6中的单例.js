// class DB{
//     constructor(){
//         console.log('实例化')
//         this.collect()
//     }
//     collect(){
//         console.log('连接数据库')
//     }
//     find(){
//         console.log('查询数据库')
//     }
// }

// var d1 = new DB()
// var d2 = new DB()
// var d3 = new DB()

class DB{
    
    static getInstance(){
        if(!DB.instance){
            DB.instance = new DB()
        }
        return DB.instance
    }
    constructor(){
        console.log('实例化')
        this.collect()
    }
    collect(){
        console.log('连接数据库')
    }
    find(){
        console.log('查询数据库')
    }
}

var d1 = DB.getInstance()
var d2 = DB.getInstance()
var d3 = DB.getInstance()

