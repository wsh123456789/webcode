//引入
const express = require('express');

//创建应用对象
const app = express();

app.all('/server', (request, response)=>{
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
//创建路由规则
app.all('/fetch-server', (request, response)=>{
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    
    const data = {
        name: 'hahahaha'
    };   
    let str = JSON.stringify(data);
    //延时相应
    // setTimeout(()=>{
    //     response.send('延时相应');
    // },3000)
    //设置相应体
    response.send(str);
})

app.all('/jsonp-server', (request, response)=>{
    //设置响应头
    // response.setHeader('Access-Control-Allow-Origin','*');
    // response.setHeader('Access-Control-Allow-Headers','*');
    
    const data = {
        exist: 1,
        msg: 'hahahaha'
    };   
    let str = JSON.stringify(data);
    response.send(`handle(${str})`);
})

//监听端口
app.listen(8000, ()=>{
    console.log("服务器已启动,8000 端口监听中...");
})