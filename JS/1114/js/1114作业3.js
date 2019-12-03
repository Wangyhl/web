var menuData = [
    {
        name: "主页",
        link: '/home'
    },
    {
        name: "产品中心",
        link: "/product",
        submenu: [
            {
                name: "电脑",
                link: '/computer'
            },
            {
                name: "手机",
                link: '/phone'
            },
            {
                name: "家电",
                link: '/jiadian'
            }
        ]
    },
    {
        name: "关于我们",
        link: '/about'
    },
    {
        name: "联系我们",
        link: '/contact',
        submenu:[
            {
                name: "电话",
                link: '/contact/p'
            },
            {
                name: "邮箱",
                link: '/contact/e'
            },
            {
                name: "微信",
                link: '/contact/we'
            },
        ]
    }
]
// var ulListOne = document.querySelector(".one");
// var html = "";
// for(i in menuData){
//     var li = menuData[i];
//     var subData = li.submenu;
//     var listOne = ""
//     if(subData){
//         var listTwo = "";
//         for(j in subData){
//             var liTwo = subData;
//             var htmlTwo = `
//                     <li><a href = "${liTwo.link}">${liTwo.name}</a></li>
//             `;
//             listTwo += htmlTwo;
//         }
//         listOne = `
//             <li>
//                 <a href = "${li.link}">${li.name}</a>
//                 <ul class="two">
//                     ${htmlTwo}
//                 </ul>
//             </li>
//         `;
//     }else{
//         listOne = `
//             <li>
//                 <a href = "${li.link}">${li.name}</a>
//             </li>
//         `;
//     }
//     html += listOne;
// }
// ulListOne.innerHTML = html;




var ulListOne = document.querySelector(".one");
var htmlOne = "";
for(i of menuData){
    // var li = menuData[i];
    var subli = i.submenu;
    // var html = `
    //     <li><a href = "${i.link}">${i.name}</a>
    // `;
    //二级
    var html2 = "";
    if(subli){
        var ulListTwo = "";
        for(j of subli){
            // var liTwo = subli[j];
            ulListTwo += `
                    <li class = "box1"><a href = "${j.link}">${j.name}</a></li>
            `
        }
        html2 += `
                <ul class = "two">
                    ${ulListTwo}
                </ul>
        `;
    }
    // htmlOne += html += html2 += `</li>`;
    htmlOne += `
        <li>
            <a href = "${i.link}">${i.name}</a>
            ${html2}
        </li>
    `
}
ulListOne.innerHTML = htmlOne;