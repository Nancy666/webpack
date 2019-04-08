//webpack是node写出来的
const path = require('path')
//将打包后的js自动插入HTML中
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devServer: {    //开发服务器的配置
        port: 8000,
        progress: true,
        contentBase: './build',
        compress: true,
        // open: true      //自动打开浏览器
    },
    mode: 'production',     //两种模式 production development
    entry: './src/index.js',
    output: {
        filename: 'bundle.[hash:8].js',  //生成的文件名,加哈希戳，每次打包的文件名都不一样，防止缓存
        path: path.resolve(__dirname, 'build')  //必须是绝对路径
    },
    plugins: [    //数组，放着所有的webpack插件
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: 'index.html',    //打包后生成的文件也叫index.html
            minify: {    //压缩HTML
                removeAttributeQuotes: true,   //去掉双引号
                // collapseWhitespace:true     //空白折叠
            },
            hash:true    //在HTML中引入的bundle.js后加上哈希戳，以防止缓存
            //比如：<script type=text/javascript src=bundle.js?b3c9f9459eff291b753f></script>
        })
    ]
}