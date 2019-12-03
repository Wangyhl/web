var box = document.getElementById("box");
var div = box.getElementsByTagName("div");
var btn = document.getElementById("btn");
btn.onclick = function(){
    for(var i = 0;i < div.length;i++){
        div[i].style.backgroundColor = "red";
    }
}