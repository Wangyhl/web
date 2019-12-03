//判断用户输入的内容格式是否正确
//阻止提交
let submiit = document.querySelector("#submit");
let emailIpt = document.querySelector("#email");
let emailHelp = document.querySelector("#email-helpBlock");
let telIpt = document.querySelector("#tel");
let telHelp = document.querySelector("#tel-helpBlock");
let userIpt = document.querySelector("#username");
let userHelp = document.querySelector("#username-helpBlock");
let passIpt = document.querySelector("#password1");
let passHelp = document.querySelector("#password1-helpBlock");
let passIpt2 = document.querySelector("#password2");
let passHelp2 = document.querySelector("#password2-helpBlock");
pass = false;

submiit.onclick = function(e){
    //判断是否选中
    let check = document.querySelector("#check").checked;
    //邮箱判定
    let emailPass = /^\w{2,}@\w{2,}\.[a-zA-Z0-9]{2,}$/.test(emailIpt.value);
    //电话号码判定
    let telPass = /^1[3-9]\d{9}$/.test(telIpt.value);
    //用户名判定，字母开头必须包含数字，字母，下划线
    let userPass = /^[a-zA-Z][u4e00-u9fa50-9a-zA-Z_]{5,29}$/.test(userIpt.value);
    //密码判定，必须包含数字，字母，特殊符号
    let passPass = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*_+-,./?;:"'])[a-zA-Z0-9!@#$%^&*_+-,./?;:"']{6,20}$/.test(passIpt.value);
    //判断两次密码是否相同
    let same = passIpt.value == passIpt2.value;
    pass = emailPass && telPass && userPass && passPass && same && check;
    if(!pass){
        e.preventDefault();
    }
}

function verify(el,index,help,text){
    if(!el){
        index.parentElement.classList.add("has-error");
        index.parentElement.classList.remove("has-success");
        help.innerHTML = text;
    }else {
        index.parentElement.classList.remove("has-error");
        index.parentElement.classList.add("has-success");
        help.innerHTML = " ";
    }
}

emailIpt.onblur = function(){
    let emailPass = /^\w{2,}@\w{2,}\.[a-zA-Z0-9]{2,}$/.test(emailIpt.value);
    verify(emailPass,emailIpt,emailHelp,"请输入正确的邮箱格式");
}

telIpt.onblur = function(){
    let telPass = /^1[3-9]\d{9}$/.test(telIpt.value);
    verify(telPass,telIpt,telHelp,"请输入正确的电话号码");
}

userIpt.onblur = function(){
    let userPass = /^[a-zA-Z][\u4e00-\u9fa50-9a-zA-Z_]{5,29}$/.test(userIpt.value);
    verify(userPass,userIpt,userHelp,"请输入正确的用户名");
}

passIpt.onblur = function(){
    let passPass = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*_+-,./?;:"'])[a-zA-Z0-9!@#$%^&*_+-,./?;:"']{6,20}$/.test(passIpt.value);
    verify(passPass,passIpt,passHelp,"请输入6-20为密码，包含数字、字母、特殊符号");
}

passIpt2.onblur = function(){
    let same = passIpt.value == passIpt2.value;
    verify(same,passIpt2,passHelp2,"请输入相同的密码");
}