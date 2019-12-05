// // 1. 导入数据库
// const mysql = require("mysql");
// // 2. 默认配置
// const defaultOptions = {
//     host: '127.0.0.1',
//     port: '3306',
//     user: 'root',
//     password: '1234',
//     database: 'db_test'
// }
// //3. 创建连接函数
// function getConnection(options = defaultOptions) {
//     return mysql.createConnection(options);
// }
// //4. 导出连接函数
// module.exports = getConnection;

// // 1. 导入数据库
// const mysql = require("mysql");
// // 2. 创建连接函数
// function getConnection() {
//     return mysql.createConnection({
//         //主机
//         host: '127.0.0.1',
//         //端口号
//         port: '3306',
//         //用户名
//         user: 'root',
//         //密码
//         password: 'wyh970428',
//         //数据库名称
//         database: 'db_test'
//     });
// }
// // 3. 导出连接函数
// module.exports = getConnection;


const mysql = require("mysql");
const defaultOptions = {
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123',
    database: 'db_test'
}
function getConnection(options = defaultOptions) {
    return mysql.createConnection(options);
}
module.exports = getConnection;