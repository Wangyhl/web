let lbt = document.getElementById("lbt");
let box = document.getElementById("box");

let li = document.querySelectorAll("li");
let num = document.querySelector(".num");

let count = li.length;
//获取box的宽度
let boxWidth = parseFloat(getComputedStyle(box).width);
let i = 0;

//给li设宽度
li.forEach(function(el){
    el.style.width = boxWidth + "px";
})

//给ul设宽度
lbt.style.width = boxWidth * count + "px";

//设置span数量
let spanHtml = "";
for(i = 0;i < count - 1;i++){
    spanHtml += `<span data-index="${i+1}">${i+2}</span>`
}
num.innerHTML = `<span data-index="0" class = "color">1</span>` + spanHtml;
//获取span
let span = document.querySelectorAll(".num span");
console.log(span)

function move(index){
    if(index == undefined){
        if(i == 5){
            i = 0;
        }
        lbt.style.transform = `translateX(-${boxWidth*i++}px)`;
        console.log(i)
        for(item = 0; item < span.length; item++){
            span[item].classList.remove("color");
        }
        span[i-1].classList.add("color");
    }else{
        lbt.style.transform = `translateX(-${boxWidth*index}px)`;
        i = index;
    }
}

let t = setInterval(move,1500);

//鼠标进入停止滚动
box.addEventListener("mouseenter",function(){
    clearInterval(t);
})

//鼠标移出重新开始滚动
box.addEventListener("mouseleave",function(){
    t = setInterval(move,1000);
})

//点击数字跳转图片
span.forEach(function(el){
    el.addEventListener("click",function(e){
        for(item = 0; item < span.length; item++){
            span[item].classList.remove("color");
        }
        this.classList.add("color");
        let moveSpan = e.target.dataset.index;
        move(moveSpan);
    })
})