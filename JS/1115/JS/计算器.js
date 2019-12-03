//get the in-num's number
var num = false;
function outNum(value){
    var outNumEle = document.getElementById("out-num");
    if(num){
        // console.log(num);
        if(!isNaN(value)){
            outNumEle.value = "";
            outNumEle.value = value;
        }else{
            outNumEle.value += value;
        }
        num = false;
    }else{
        // console.log(num);
        outNumEle.value += value
    }
}

function outNumC(){
    var outNumEle = document.getElementById("out-num");
    outNumEle.value = "";
}

function outNumDeng(){
    var outNumEle = document.getElementById("out-num");
    var number = outNumEle.value;
    number = number.replace(/×/g,"*");
    number = number.replace(/÷/g,"/");
    outNumEle.value = eval(number);
    num = true;

}
