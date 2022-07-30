//引入
const express = require('express');

//创建应用对象
const app = express();

//创建路由规则
app.get('/', (request, response)=>{
    //设置相应
    response.send('hello,express!');
})

//监听端口
app.listen(8000, ()=>{
    console.log("服务器已启动,8000 端口监听中...");
})