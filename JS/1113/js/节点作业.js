// //添加表格属性
// var table = document.createElement("table");
// // table.setAttribute("border","1px")
// for (i = 0; i <= 9; i++) {
//     //添加tr属性
//     var tr = document.createElement("tr");
//     for (j = 0; j <= i; j++) {
//         //添加文字
//         // var text = document.createTextNode(`${j}*${i}=${j*i}`);
//         //添加td
//         var td = document.createElement("td");
//         //在td内添加文字
//         td.innerText = `${j}*${i}=${j * i}`;
//         //td内添加子元素text
//         // td.appendChild(text);
//         //tr内添加子元素td
//         tr.appendChild(td);
//     }
//     //table内添加子元素tr
//     table.appendChild(tr);
// }
// //获取id为box的节点
// var box = document.querySelector("#box");
// //在box内添加子元素table
// box.appendChild(table);

var box = document.querySelector('#box');
var tableHtml = ""
var html = "";
for(row = 1;row <= 9; row++){
    var tdCellHtml = "";
    for(col = 1;col <= row;col++){
        var cellHtml = `<td>${col}*${row}=${row*col}</td>`;
        tdCellHtml += cellHtml;
        // console.log(tdCellHtml);
    }
    var trRowHtml = `<tr>${tdCellHtml}</tr>`
    tableHtml += trRowHtml;
    // console.log(trRowHtml);
}

html = `<table>${tableHtml}</table>`;
box.innerHTML = html;