const express = require('express'); //引入express模块

const app = express();

// 静态资源服务器
// 中间件：express.static
app.use(express.static('./'));

app.listen(8008, () => { //开启服务器，端口号设置为8008
    console.log('server is running on http://localhost:8808');
});