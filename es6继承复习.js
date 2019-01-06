class Person{
    constructor(name,age){
        this.name = name
        this.age= age
    }
    getInfo(){
        console.log(this.name +'---'+this.age)
    }
}

class Students extends Person{
    constructor(name,age,sex){
        super(name,age)
        this.sex = sex
    }
    getSex(){
        console.log(this.sex)
    }
}

var s1 = new Students('dujishi',28,'male')
s1.getInfo()
s1.getSex()
