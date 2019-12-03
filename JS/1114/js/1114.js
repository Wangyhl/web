var tableList = [
    {
        "id": 1,
        "name": "钱秀英",
        "phone": "16153658896",
        "email": "i.swoqfifm@hcpydc.tk",
        "age": 26,
        "companyId": 4
    },
    {
        "id": 2,
        "name": "汤刚",
        "phone": "18686238114",
        "email": "v.wdprtl@vkiply.md",
        "age": 44,
        "companyId": 4
    },
    {
        "id": 3,
        "name": "薛芳",
        "phone": "16128785652",
        "email": "c.gjt@xjcvwue.mn",
        "age": 33,
        "companyId": 4
    },
    {
        "id": 4,
        "name": "魏娜",
        "phone": "18782160773",
        "email": "k.yncvnd@tblulhs.sr",
        "age": 40,
        "companyId": 4
    },
    {
        "id": 5,
        "name": "贺强",
        "phone": "17527781553",
        "email": "r.lgcgl@kyuskxku.fr",
        "age": 38,
        "companyId": 8
    },
    {
        "id": 6,
        "name": "郑丽",
        "phone": "15764758850",
        "email": "v.hpf@ytawhuhz.ev",
        "age": 22,
        "companyId": 4
    },
    {
        "id": 7,
        "name": "梁超",
        "phone": "15793616023",
        "email": "c.pdqwc@cgsneeji.nr",
        "age": 40,
        "companyId": 6
    },
    {
        "id": 8,
        "name": "袁秀英",
        "phone": "18388787880",
        "email": "g.rac@lrjcnr.at",
        "age": 25,
        "companyId": 3
    }
]

var tbody = document.querySelector("tbody");
for(i in tableList){
    var list = tableList[i];
    var html = `
        <tr>
            <td>${list.id}</td>
            <td>${list.name}</td>
            <td>${list.phone}</td>
            <td>${list.email}</td>
            <td>${list.age}</td>
            <td>${list.companyId}</td>
        </tr>
    `;
    tbody.innerHTML += html;
}