/*
    利用fs、http、url模块开发一个本地相册

    Node.js 中，__dirname 总是指向被执行 js 文件的绝对路径，所以当你在 /d1/d2/myscript.js 文件中写了 __dirname， 它的值就是 /d1/d2 。
相反，./ 会返回你执行 node 命令的路径，例如你的工作路径。

    制作思路：
        1、开启服务器，前端能发送请求，后端能做出响应(http模块)
        2、获取请求发送过来的路径：img/g1.jpg  通过url.parse(req.url).pathname 就是我们想要的数据(url模块)
        3、获取js所在路径：__dirname
        4、利用path的方法join()将前端想要的文件的绝对路径拼接好：D:\code\code for three\code-of-node\nodejs\01node\img\g1.jpg (path模块)
        5、得到路径，就可以利用fs模块进行文件读写了 (fs模块)
*/

const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

//1.开启http服务器
http.createServer((req, res) => {
    if (req.url === '/favicon.ico') return;//阻止请求favicon.ico文件
    let pathname = url.parse(req.url).pathname;
    // console.log(pathname);//获取网页文件路径：img/g1.jpg
    // console.log(__dirname);//获取当前js所在路径：D:\code\code for three\code-of-node\nodejs\01node
    let realpath = path.join(__dirname, pathname);//把两个路径拼接好：D:\code\code for three\code-of-node\nodejs\01node\img\g1.jpg,有了这个路径，我们就可以根据路径读取文件了，读到的文件再响应给前端并渲染到页面中。
    // console.log(realpath);

    //文件的读取
    fs.readFile(realpath, (err, data) => {

        res.writeHead(200, { 'Content-Type': 'image/jpeg' });
        // console.log(data);
        res.end(data);
    });
    // res.end('结束');
}).listen(3008, () => {
    console.log('启动服务器，端口为3008');
});