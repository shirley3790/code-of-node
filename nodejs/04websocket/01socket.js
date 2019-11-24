const express = require('express');
const http = require('http');
const ws = require('ws');

// 创建express应用
let app = express();

// 静态资源服务器
app.use(express.static('./'));

let server = http.Server(app);

// WebSocket服务器
let SocketServer = ws.Server;
let wss = new SocketServer({
    server,
    port: 1001
});

// 监听客户端连接
wss.on('connection', (client) => {
    // 接收消息
    client.on('message', function (msg) {
        console.log(msg);
    });
});