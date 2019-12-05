//普通函数
let hi = function(){

}
//1、箭头函数
//当参数为一个时圆括号可以省略
// let hello = name => {}
let hello = (name) => {
    console.log('hi,${name}')
}
//当只返回一个值且只有一行代码时，花括号也可省略
// let sum = (a,b) => a + b;

// let sum = (a,b) =>{
//     return a + b;
// }

//2、闭包
//读取局部变量
let x = 10;
function fn(){
    let y = 20;
    return function(){
        console.log(y);
    }
}
fn()();
//缓存变量，导致内存泄漏，导致页面卡死，慎用
//处理异步
let name = undefined;
getName(function(){
    console.log(`hello,${name}`)
})

function getName(callback){
    setTimeout(() => {
        name = "木子李";
        callback();
    }, 3000);
}

//3、Object.difneProperty
//类型判断，抛出异常
//希望某个属性不可更改时
//typescript => 类型检测 => ES5 => 面试题级别 => 中级工程师
//vue 数据监听
let stu = {
    name : "木子李"
}
//不可更改
Object.defineProperty(stu,"major",{
    value:"信息技术"
    //writable默认为false，不想改变时可以忽略不写
    // writable:true
})
stu.major = "电子商务";
//ES5类型判断
Object.defineProperty(stu,"age",{
    configurable: true,
    enumerable: true,
    set(val){//设置器
        //异常处理
        // if(typeof val != "number"){
        if(["string","number"].indexOf(typeof val) == -1){
            throw new Error("类型错误")
        }
        //成员变量 _age
        this._age = val;
    },
    get() {
        return this._age;
    }
})
stu.age = '26';
console.log(stu.age)


//4、深拷贝
let o1 = {
    name:"木子李",
    age: 29,
    major: ["信息技术","数学"]
}
let o2 = Object.assign({},o1,{//值拷贝
    major:[...o1.major]
})
o2.major.push("语文");
console.log(o1.major);
console.log(o2.major);

//5、事件代理


//6、递归函数 => 在函数内部调用自身，容易陷入死循环
//常用于 n! = 5 x 4 x 3 x 2 x 1

//表单验证
// tips.className = (/^\w{4,8}$/.test(value)) ? "ipt" : "ipt error"