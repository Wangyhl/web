var hour = document.getElementById("hour");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");

function time(){
    var date = new Date();
    var secondsEle = date.getSeconds().toString().padStart(2,0);
    var minutesEle = date.getMinutes().toString().padStart(2,0);
    var hourEle = date.getHours().toString().padStart(2,0);

    seconds.innerText = secondsEle;
    minutes.innerText = minutesEle;
    hour.innerText = hourEle;
}

setInterval(function(){
    time()
},1000)