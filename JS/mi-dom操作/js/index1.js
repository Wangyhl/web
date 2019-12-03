
var arryData = [
    {
        "title": "小米9 6GB+128GB",
        "url": "https://item.mi.com/1190800033.html",
        "thumbnail": "https://i1.mifile.cn/a1/pms_1550642182.7527088!220x220.jpg",
        "desc": "骁龙855，索尼4800万超广角微距三摄",
        "price": "2999"
    },
    {
        "title": "小米MIX 3 6GB+128GB",
        "url": "https://item.mi.com/1184200013.html",
        "thumbnail": "https://i1.mifile.cn/a1/pms_1552647865.67536173!220x220.jpg",
        "desc": "磁动力滑盖全面屏 / 四曲面陶瓷机身",
        "price": "3299"
    },
    {
        "title": "小米Play 4GB+64GB",
        "url": "https://www.mi.com/miplay-nocard/",
        "thumbnail": "https://i1.mifile.cn/a1/pms_1554694214.08887531!220x220.png",
        "desc": "八核高性能处理器，后置1200万 AI 双摄",
        "price": "799"
    },
    {
        "title": "小米8 屏幕指纹版 6GB+128GB",
        "url": "https://www.mi.com/mi8ud/",
        "thumbnail": "https://i1.mifile.cn/a1/pms_1538019009.57772743!220x220.png",
        "desc": "全球首款压感屏幕指纹 骁龙845处理器",
        "price": "1999"
    },
    {
        "title": "小米8青春版6GB+64GB",
        "url": "https://item.mi.com/1183600012.html",
        "thumbnail": "https://i1.mifile.cn/a1/pms_1550642182.7527088!220x220.jpg",
        "desc": "潮流镜面渐变色，2400万自拍旗舰",
        "price": "1499"
    },
    {
        "title": "Redmi Note 7 6GB+64G",
        "url": "https://item.mi.com/1185200029.html",
        "thumbnail": "https://i1.mifile.cn/a1/pms_1547020972.223707!220x220.jpg",
        "desc": "4800万拍照，4000mAh大电量",
        "price": "1399"
    },
    {
        "title": "Redmi K20 Pro 6GB+128GB",
        "url": "https://www.mi.com/redmik20pro/",
        "thumbnail": "https://i1.mifile.cn/a1/pms_1558857780.47412427!220x220.jpg",
        "desc": "骁龙855旗舰处理器，索尼4800万超广角三摄",
        "price": "2599"
    },
    {
        "title": "Redmi Note 7 Pro",
        "url": "https://item.mi.com/1191000019.html",
        "thumbnail": "https://i1.mifile.cn/a1/pms_1552647865.67536173!220x220.jpg",
        "desc": "6GB+128GB大存储，索尼4800万拍照",
        "price": "1599"
    }
    // {
    //     "title": "小米9 6GB+128GB",
    //     "url": "https://www.mi.com/mi8ud/",
    //     "thumbnail": "https://i1.mifile.cn/a1/pms_1550642182.7527088!220x220.jpg",
    //     "desc": "骁龙855，索尼4800万超广角微距三摄",
    //     "price": "2999"
    // }

]


var list = document.querySelector(".phone-list");

for(i in arryData){
    var html = arryData[i];
    var section = `
        <section class="item">
            <div class="figure-img">
                <a href=${html.url} target="_blank">
                    <img src=${html.thumbnail} alt=${html.title} 6gb+128gb="">
                </a>
            </div>
            <h3><a href="" class="title">${html.title}</a></h3>
            <p class="desc">${html.desc}</p>
            <p class="price"><span>${html.price}</span>元</p>
        </section>
    `;
    list.innerHTML += section;
}