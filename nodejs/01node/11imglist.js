/*
    利用fs、http、url模块开发一个本地相册

    Node.js 中，__dirname 总是指向被执行 js 文件的绝对路径，所以当你在 /d1/d2/myscript.js 文件中写了 __dirname， 它的值就是 /d1/d2 。
相反，./ 会返回你执行 node 命令的路径，例如你的工作路径。
*/

const http = require('http');
const fs = require('fs');
const url = require('url');

//1.开启http服务器
http.createServer((req, res) => {
    //设置响应头:content-Type 告诉浏览器响应内容的类型
    res.writeHead(200, { 'content-Type': 'text/html;charset=utf-8' });
    let path = url.parse(req.url);
    console.log(path);//打印前端发起请求的url
    res.end('结束');
}).listen(3008, () => {
    console.log('启动服务器，端口为3008');
});