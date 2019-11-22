const express = require('express'); //引入express模块
const bodyParser = require('body-parser');

const app = express();

/*
    get(root,fn)方法用来响应前端的get请求，如果前端访问根目录，就响应一些内容给前端
        * 参数一：root 路径，可以是真实的，也可以是虚拟的路径，这就是路由
        * 参数二：fn  回调函数,里面有两个参数
            * 参数一：request 请求对象 req
                * 子对象
                    * req.query 可以获取参数部分数据并自动转成对象。
                        * 比如http://localhost:8809/category?keyword=html5 可以获取到{keyword : html5}
                    * req.params 可以获取到动态路由参数
                        * 比如 http://localhost:8809/good/1 只要在root里面设置'/good/:id' ,就可以通过变量id接收前端传来的1
                * 事件
                    * on() 绑定事件
                        * data 数据从客户端传输到服务器中
                        * end  数据传输完毕
            * 参数二：responst对象 res
                * 方法
                    * res.send() 可以给前端做出响应，发数据给前端，类似php的echo

*/

// 静态资源服务器
// 中间件：express.static
app.use(express.static('./'));

//如果访问根目录，返回字符串“这是首页”给前端
app.get('/', (req, res) => {
    res.send('这是首页'); //类似php里面的echo
});


// app.post('/login', (req, res) => {
//     res.send('这是登录页')
// });

// 如何获取参数
// app.post('/login', (req, res) => {
//     // console.log(req.body); //undefined res没有body可以拿数据。证明是流传输方式，用事件检测来获取数据
//     res.send('这是登录页');

//     let content = '';
//     req.on('data', chunk => {
//         console.log(chunk); //打印二进制流，数组格式,想得到完整的数据要拼接起来
//         content += chunk;
//     });

//     req.on('end', () => {
//         console.log(content); //可以获取到参数：name=malin&age=18,想拿到具体的值，可以用原生js自己切割。也可以借助中间件body-parser(第三方模块，自己安装)
//     });
// });


// 如何获取参数：借助中间件 body-parser
app.post('/login', bodyParser.urlencoded({
    extended: false
}), (req, res) => {
    console.log(req.body); //可以获取到对象{name:malin}
    console.log(req.body.name); //可以获取到对象{name:malin}
    res.send('这是登录页');

});


app.listen(8012, () => { //开启服务器，端口号设置为8008
    console.log('server is running on http://localhost:8012');
});