// 读入文件，将文件转化为base64字符串，并输出到某个目录下
const fs = require("fs")
const util = require("util")
//const prefix = "data:image/jpg;base64,"
const prefix = ''
const data = fs.readFileSync('./photo/dongman.jpg')
const base64Str = prefix + data.toString('base64')
console.log(base64Str)

fs.writeFile('./photo/res/test-dongman-base64.txt', base64Str, function(err) {
    if(err) {
        console.log(`failed ${err}`)
    } else {
        console.log('finish')
    }
})


// // 将文件中的base64字符串读入，并转化为图片格式输出
// const fs = require("fs")
// const data = fs.readFileSync('./photo/res/transfer.json')
// fs.writeFile('./photo/res/res.jpg', data, function(err) {
//     if(err) {
//         console.log(`failed ${err}`)
//     } else {
//         console.log('finish')
//     }
// })
