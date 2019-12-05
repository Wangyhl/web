// 1. 导入并获取express
const app = require("express")();
// // 2. 创建express实例
// const app = express();

// 2. 处理跨域
app.all("*", (req, res, next) => {
    //设置允许跨域的域名，*代表允许任意域名跨域 CROS
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.send(200);  // 让options尝试请求快速结束
    else
        next();
});

//处理静态资源
app.use(require("express").static("www"));

// 3. 中间键 (POST)请求
// 导入中间件 body-parser
const bodyParser = require("body-parser");
// application/x-www-form-urlencoded 解析
app.use(bodyParser.urlencoded({extended:false}));
// application/json 解析
app.use(bodyParser.json());

// 4. 处理路由
const userRoute = require("./routes/user");
const orderRoute = require("./routes/order");
app.use("/",userRoute);
app.use("/orders",orderRoute);

// 5. 监听 http://127.0.0.1:8081"
//8081为端口号，80端口是默认端口号
//IP设为0.0.0.0时，所有人都可以访问
app.listen(8081, "0.0.0.0");

// 6. 监听GET请求，用户访问路径‘/’
//监听post请求
// app.post(){}
//接口地址:http:127.0.0.1：8081
// app.get("/", function (req, res) {
// app.get("/", (req,res) => {})
    // req -> request -> 请求对象
    // res -> response -> 响应对象
  	// 响应，向前端发送数据
//     res.send({
//         "code": 200,
//         "massage":"妄酒"
//     });
// });

// 7. 打印输出提示信息
console.log("server running at http://127.0.0.1:8081");