//脚本在body结束标签之前引用，以保证可以获取到html的所有元素
//在页面加载完成后开始执行，可以将引用文件放在body标签的头部
// window.onload = function(){

// }
//在body结束标签之前引用时，常常采用自调用函数
// (function(){})
//代码优化：文件合并

(function(){
    //#定时器
    let _count = 5;
    let _t = setInterval(function(){
        //清除定时器
        if(_count <= 0){
            clearInterval(_t);
        }
        console.log(_count--);
    },1000);
    //#延时函数
    let _y = setTimeout(function(){
        console.log("猪猪")
    }, 6000);

    //异常处理
    //主要用于封装三方库/插件
    // let _str = 28;
    // if(typeof _str != "string"){
    //     throw new Error("_str 必须是字符串")
    // }

    //try抛出代码catch捕获错误后，弹框报错，程序不会中断，按正常流程进行下去
    // try {
    //     alertt("Hello, World!");
    // }catch(err) {
    //     // 捕捉异常
    //     var des = "错误警告：" + err.message;
    //     alert(des);
    // }finally{
    //     console.log("不管是否存在异常都会在最后运行的语句")
    // }



})();