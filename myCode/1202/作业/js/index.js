let daysEle = $(".days");
let hoursEle = $(".hours");
let minutesEle = $(".minutes");
let secondsEle = $(".seconds");

//获取元素
function $(sel,isAll){
    if(isAll){
        return document.querySelectorAll(sel);
    }
    return document.querySelector(sel);
}

//计算倒计时
function time() {
    //获取现在的时间
    let date = new Date();
    //获取春节的时间
    let newYearDate = new Date(2020, 0, 25);
    //获取现在到春节的时间差，返回毫秒数
    let ms = newYearDate - date;
    //计算天数
    let days = Math.floor(ms / 1000 / 60 / 60 / 24);
    //计算小时数
    let hours = Math.floor(ms / 1000 / 60 / 60 % 24);
    //计算分钟数
    let minutes = Math.floor(ms / 1000 / 60 % 60);
    //计算秒数
    let seconds = Math.floor(ms / 1000 % 60);
    //将结果插入到div中
    daysEle.innerText = days.toString().padStart(2,0);
    hoursEle.innerText = hours.toString().padStart(2,0);
    minutesEle.innerText = minutes.toString().padStart(2,0);
    secondsEle.innerText = seconds.toString().padStart(2,0);
}
//初始化
time();

//定时器
setInterval(time,1000);