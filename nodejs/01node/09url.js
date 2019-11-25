// 原生模块：nodejs自带的模块，不需要安装，直接引用
/*
    复习url的构成：
        * 协议
        * 域名
        * 端口号
        * 路径==目录
        * 参数
        * 哈希值==锚点
    
    知识点：
        url模块：
            * 属性
            * 方法
                * url.parse(url, boolean)：把url信息转成对象
                    * url：字符串格式的 url
                    * boolean：是否把url参数转为对象，
                        * false(默认)：参数为字符串
                        * true：将参数转转对象
                * url.format(params)：对象转字符串，url.parse的反过程
                * url.resolve(): 以一种 Web 浏览器解析超链接的方式把一个目标 URL 解析成相对于一个基础 URL
*/

const http = require('http'); //创建服务器的模块
const url = require('url'); //获取url，操作url的对象，类似原生里面的location对象

// console.log(http);//打印一下这个模块有什么
// console.log(url);


let app = http.createServer(function (request, response) {
    //设置响应头:content-Type 告诉浏览器响应内容的类型
    response.writeHead(200, {
        'content-Type': 'text/html;charset=utf-8'
    });
    // console.log(request.url);
    // console.log(url.parse(request.url)); //前端输入：localhost:2020?name=malin&adr=guangxi
    let params = url.parse(request.url, true); //得到数据：{name:malin,adr:guangxi}
    console.log(params.query);
    //路由:根据url不同切换显示不同的内容
    response.end('结束');
});


app.listen(2020, function () {
    //服务器启动后会执行这里的代码
    console.log('服务器启动成功，端口号是2020');
});