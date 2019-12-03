var inNumEle = document.getElementById("in-num");
var outNumEle = document.getElementById("out-num");
var btnEle = document.getElementById("chick");

btnEle.onclick = function(){
    var inNum = inNumEle.value;
    var outNum = inNum.slice(6,10);
    var outNum1 = inNum.slice(10,12);
    var outNum2 = inNum.slice(12,14);
    outStrNum = outNum + "年" + outNum1 + "月" + outNum2 + "日";
    outNumEle.value = outStrNum;
    console.log(outStrNum);
}