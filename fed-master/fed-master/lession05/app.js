const express = require('express');

const app = express();

// express => Node => web server: http请求 request : response
// http请求：三次握手：request : response

app.post('/login', function (req, res) {
  console.log(req, res)
  // reg (username, password)
  // if(username == wusihao' && password = '123456') {
  //  return true
  // } else { return false}

  //  return res;
  // res.send('Got a POST request')
})

app.use(express.static('public'));

app.listen(3000, () => {
  console.log( 'http://localhost:3000')
})
