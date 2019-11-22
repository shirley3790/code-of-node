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

//跨域设置：cors
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); //授权，*代表所有人能访问，可以只写一个域名，给某个域名访问
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");

    // 跨域请求CORS中的预请求
    if (req.method == "OPTIONS") {
        res.send(200); /*让options请求快速返回*/
    } else {
        next();
    }
});

// 静态资源服务器
// 中间件：express.static
app.use(express.static('./'));

//如果访问根目录，返回字符串“这是首页”给前端
app.get('/', (req, res) => {
    res.send('这是1911端口首页'); //类似php里面的echo
});


// 如何获取参数：借助中间件 body-parser
app.post('/login', (req, res) => {
    let data = [{
        name: '杨超越',
        age: 18
    }];
    res.send(data);
    // res.send('good');
});



app.listen(1911, () => { //开启服务器，端口号设置为8008
    console.log('server is running on http://localhost:1911');
});