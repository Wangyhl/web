let lbt = document.getElementById("lbt");
let box = document.getElementById("box");
let num = document.querySelectorAll("span");
let img = document.querySelectorAll("img");

let i = 0;
// const k = 5;
// function move(){
//     if(i == 6){
//         i = 0;
//     }
//     lbt.style.transform = `translateY(-${333*i++}px)`;
//     for(item = 0; item < num.length; item++){
//         num[item].classList.remove("color");
//     }
//     num[i-1].classList.add("color");
// }

// function goTo(index){
//     lbt.style.transform = `translateY(-${333*index}px)`;
//     for(item = 0; item < num.length; item++){
//         num[item].classList.remove("color");
//     }
// }

function move(index){
    if(index == undefined){
        if(i == 6){
            i = 0
        }
        lbt.style.transform = `translateY(-${333*i++}px)`;
        for(item = 0; item < num.length; item++){
            num[item].classList.remove("color");
        }
        num[i-1].classList.add("color");
    }else{
        lbt.style.transform = `translateY(-${333*index}px)`;
        // for(item = 0; item < num.length; item++){
        //     num[item].classList.remove("color");
        // }
        i = index;
    }
}

let t = setInterval(move,1000);

box.addEventListener("mouseenter",function(){
    clearInterval(t);
})

box.addEventListener("mouseleave",function(){
    t = setInterval(move,1000);
})

num.forEach(function(el){
    el.addEventListener("mouseenter",function(e){
        for(item = 0; item < num.length; item++){
            num[item].classList.remove("color");
        }
        this.classList.add("color");
        let moveSpan = e.target.dataset.index;
        move(moveSpan);
    })
})