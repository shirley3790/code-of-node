const request = require('request');

const http = require('http');

/*
    request(fn) 用于发送ajax请求的模块，类似jq的$.ajax()
        fn : 回调函数，里面有三个参数
            * 参数一：err 错误
            * 参数二：res 响应
            * 参数三：data 响应的内容
*/

//到微博官网，查找数据接口，记得用network的 xhr模式
// request('https://m.weibo.cn/api/config/list', (error, response, body) => {
//     console.log(body);
// });


//把请求到的数据传给前端，前端用ajax请求即可。这就是服务器代理
http.createServer((req, res) => {
    /*
        类似于jquery ajax请求
    */
    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*'
    });
    request
    request('https://m.weibo.cn/api/config/list', (error, response, body) => {
        res.end(body);
    });
}).listen(3006, () => {
    console.log('server is running on http://localhost:3006')
});