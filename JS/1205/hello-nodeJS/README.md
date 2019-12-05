# 如何设计接口? restfulAPI
# 采用动宾结构
GET /orders 获取订单
GET /articles/news/published  该方法嵌套太深，不可取
GET /articles?type=news&published=true  带参数形式传递
POST /login 发送用户登录信息

# 模块化设置路由
- 用户接口 user
> 登录接口：POST /login
参数1 => username:string required
参数2 => password:string required

> 注册接口： POST /register
参数1 => username:string required
参数2 => password:string required
参数3 => tel:string options

- 订单接口 order
> 增 POST /order/add
> 删 GET /order/delete
> 查 GET /order/query
> 改 POST /order/modify