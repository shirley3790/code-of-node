const proxy = require('http-proxy-middleware');
const express = require('express');

let app = express();

app.use(express.static('./'));

//如果访问根目录，返回字符串“这是首页”给前端
app.get('/', (req, res) => {
    res.send('这是4008端口首页'); //类似php里面的echo
});

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");

    // 跨域请求CORS中的预请求
    if (req.method == "OPTIONS") {
        res.send(200); /*让options请求快速返回*/
    } else {
        next();
    }
});

// 服务器代理
//如果请求以/sinaapi开头，则进入代理模式
// http://localhost:4008/sinaapi/api/config/list 转成 https://m.weibo.cn/sinaapi/api/config/list
app.use('/sinaapi', proxy({
    "target": "https://m.weibo.cn", //你要代理的网址
    "changeOrigin": true,
    "pathRewrite": { //重新路径
        "^/sinaapi": "/"
    }
}));



app.listen(4008, function () {
    console.log('Server running on http://localhost:4008');
});