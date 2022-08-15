// 入口文件

//模块引入
const fs = require("fs");
// import * as m1 from "./m1.js";
// import * as m2 from "./m2.js";
// import * as m3 from "./m3.js";
// console.log(m1);
// console.log(m2);
// console.log(m3);

function readaaa() {
    return new Promise((resolve, reject) => {
        fs.readFile("/aaa.md", (err, data) => {
            if(err) reject(err);
            resolve(data);
        })
    })
}

async function main() {
    let aaa = await readaaa();
    console.log(aaa.toString());
}

main();