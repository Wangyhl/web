var data = [
    {
        "name": "李白",
        "position": "刺客",
        "skill": "青莲剑歌",
        "exp": 500
    },
    {
        "name": "貂蝉",
        "position": "刺客/法师",
        "skill": "绽·风华",
        "exp": 350
    },
    {
        "name": "鲁班",
        "position": "射手",
        "skill": "空中支援",
        "exp": 800
    }
];
var tbody = document.querySelector("tbody");
for(i in data){
    var dataList = data[i];
    var html = `
        <tr>
            <td>${dataList.name}</td>
            <td>${dataList.position}</td>
            <td>${dataList.skill}</td>
            <td>${dataList.exp}</td>
        </tr>
    `;
    tbody.innerHTML += html;
}