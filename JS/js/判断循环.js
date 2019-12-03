// var year = prompt("请输入年份");
// var condition = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
// if(condition){
//     console.log(year + "是闰年")
// }
// else{
//     console.log(year + "不是闰年")
// }

var btn = document.querySelector("#btn");
btn.onclick = function(){
    var age = prompt("你的年龄");
    if(age >= 18){
        // 跳转到百度
        location.href = "https://www.baidu.com"
    }
    else {
        // 关闭页面
        window.close()
    }
}

// var score = prompt("输入分数");
// var yx = score <= 100 && score >= 90;
// var bc = score < 90 && score >= 75;
// var jg = score < 75 && score >= 60;
// if(yx){
//     console.log("你很优秀");
// }else if(bc) {
//     console.log("你很不错");
// }else if (jg) {
//     console.log("你及格了");
// }else {
//     console.log("不及格")
// }