// CommonJS规范   1. 支持ES6语法

             //  2. 用require引入, module.exports导出。
// CMD(异步)和AMD(异步)运行环境是浏览器 ES6(异步还是同步取决于loader API)适用于前后端
// CommonJS(同步)环境是服务端

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './public/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js'
    },
    module: {
        rules: [
            // { test: /\.css$/, use: ['style-loader', 'css-loader']},
            { test: /\.txt$/, use: 'raw-loader' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/demo.html',
            title: '网站'
        })
    ],
    devServer: {
        host: '0.0.0.0',
        port: 9000,
        hot: true,
        open: true,
        proxy: {
            '/api': 'http://0.0.0.0:3000',
        }
      }
};