// 原生模块：nodejs自带的模块，不需要安装，直接引用

const http = require('http');

// console.log(http);//打印一下这个模块有什么

/*
    知识点：
        * 利用http对象里面的一个方法来配置一个服务器：
            createServer(fn):fn是回调函数，里面有两个形参
                * request :请求
                * response ：响应
                    * 方法：response.write() 写相应内容给前端
                    * 方法：response.writeHead() 设置响应头
                    * 方法：response.end() 设置结束标记
        * 监听端口号：利用createServer()方法返回的对象app，调用里面的方法listen()实现端口的监听
            listen(端口号,fn)
                * 参数一：端口号
                * 参数二：回调
*/

let app = http.createServer(function (request, response) {
    //设置响应头:content-Type 告诉浏览器响应内容的类型
    response.writeHead(200, { 'content-Type': 'text/html;charset=utf-8' });
    response.write('my server');
    response.write('<h1>my nodejs server</h1>');//如果不设置响应头，这里的h1是文本形式打印到页面

    //标记响应结束
    // response.end();
    response.end('<h1>早上就到这里</h1>');
});


app.listen(1010, function () {
    //服务器启动后会执行这里的代码
    console.log('服务器启动成功，端口号是1010');
});