//引入
const express = require('express');

//创建应用对象
const app = express();

//创建路由规则
app.get('/server', (request, response)=>{
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Header','*');
    
    const data = {
        name: 'hahahaha'
    };   
    let str = JSON.stringify(data);
    //延时相应
    setTimeout(()=>{
        response.send('延时相应');
    },3000)
    //设置相应体
    // response.send(str);
})

//监听端口
app.listen(8000, ()=>{
    console.log("服务器已启动,8000 端口监听中...");
})