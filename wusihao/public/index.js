// import txt from 'index.txt';
var $ = require("jquery")

$(document).ready(function() {
    $.ajax('/api/login').then(function (data) {
        console.log(data, 8888)

        $('#login').html(data.username)
    })
});