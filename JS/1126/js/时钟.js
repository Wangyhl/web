var seconds = document.getElementById("second");
var minute = document.getElementById("minute");
var hour = document.getElementById("hour");
var clock = document.getElementById("clock")

function print(){
    var date = new Date();

    var hourDeg = date.getHours()*360/12;
    var minuteDeg = date.getMinutes()*360/60;
    var secondDeg = date.getSeconds()*360/60;

    hour.style.transform = 'rotate(' + hourDeg + 'deg)';
    minute.style.transform = 'rotate(' + minuteDeg + 'deg)';
    seconds.style.transform = 'rotate(' + secondDeg + 'deg)';
}

setInterval(function(){
    print()
},1000)

var pointX = 200;
var pointY = 200;
var r = 150;

function drawNumber(){
    var deg = Math.PI*2/12;//360°
    for (var i = 1; i <= 12; i++) {
        //计算每格的角度
       var angle = deg*i;
        //计算圆上的坐标
       var x = pointX + r*Math.cos(angle);
        var y = pointY + r*Math.sin(angle);
        //创建div,写入数字
       var number = document.createElement('div');
        number.className = 'number';
        number.innerHTML = i;
        //减去自身的一半, 让div的中心点在圆弧上
       number.style.left = x - 25 + 'px';
        number.style.top = y - 25  + 'px';
        //添加到页面
       clock.appendChild(number);
    }
}
drawNumber();