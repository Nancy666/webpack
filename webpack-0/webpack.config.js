//webpack是node写出来的
const path = require('path')
// console.log(path.resolve(__dirname,'dist'))  //输出文件的绝对路径
module.exports = {
    mode:'development',     //两种模式 production development
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',  //生成的文件名
        path:path.resolve(__dirname,'build')  //必须是绝对路径
    }
}