let box = document.getElementById("box");
let box1 = document.getElementById("box1");

// box1.addEventListener("mousemove",function(el){
//     // console.log(a)
//     console.log(-el.offsetY*0.5)
//     box.style.transform = `rotateX(${el.offsetY*0.5}deg) rotate(-${el.offsetX*0.5}deg)`;
// })

function rotate(e){
    box.style.transform = `rotateX(${e.offsetY*0.5}deg) rotate(-${e.offsetX*0.5}deg)`;
}

box1.addEventListener("mousedown",function(){
    this.addEventListener("mousemove",rotate);
})

box1.addEventListener("mouseup",function(){
    this.removeEventListener("mousemove",rotate);
})