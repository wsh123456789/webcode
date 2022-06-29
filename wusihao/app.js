const express = require("express");

const server = express();

// express => Node => web server: http请求 request : response
// http请求：三次握手：request : response
server.post('/login', function (req, res) {
    console.log(req, res)
    // reg (username, password)
    // if(username == wusihao' && password = '123456') {
    //  return true
    // } else { return false}
  
    //  return res;
    // res.send('Got a POST request')
  })

server.use('', express.static('./static'));

server.listen(8080, function () { //在8080端口启动
    console.log('Example app listening on port 8080');
})
