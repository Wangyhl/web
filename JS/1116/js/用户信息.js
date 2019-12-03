var inStrEle = document.getElementById("in-str");
var inNumEle = document.getElementById("in-num");
var inEmaEle = document.getElementById("in-ema");
// var outBtn = document.getElementById("out-btn");
var outStrEle =  document.getElementById("out-str");
var outNumEle = document.getElementById("out-num");
var outEmaEle = document.getElementById("out-ema");

//姓名覆盖
inStrEle.onchange = function(){
    var inStr = inStrEle.value.trim();
    // var outStr = inStr.replace(inStr[1],"*");
    var outStr = inStr[0] + "*" + inStr.slice(2);
    outStrEle.value = outStr;
}

//电话覆盖
inNumEle.onchange = function(){
    var inNum = inNumEle.value.trim();
    var inNums = inNum.replace(/-/g,"");
    var inNumBe = inNums.slice(0,3);
    // var inNumChe = inNums.slice(3,7);
    var inNumAf = inNums.slice(7,11);
    // var outNum = "";
    // for(i = 0;i < inNumChe.length;i++){
    //     var outNumStr = inNumChe.replace(inNumChe,"*");
    //     outNum += outNumStr;
    // }
    // outNumEle.value = inNumBe + outNum + inNumAf;
    outNumEle.value = inNumBe + "****" + inNumAf;
}

//邮箱覆盖
inEmaEle.onchange = function(){
    var inEma = inEmaEle.value.trim();
    var inEmaCha = inEma.indexOf("@");
    var outEma = "";
    for(i = 0;i < inEmaCha; i++){
        outEma += "*";
    }
    outEmaEle.value = outEma+inEma.slice(inEmaCha);
}