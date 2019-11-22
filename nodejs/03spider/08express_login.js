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


// 如何获取参数：借助中间件 body-parser
app.post('/login', bodyParser.urlencoded({
    extended: false
}), (req, res) => {
    console.log(req.body)

    let user = [{
            username: 'malin',
            password: 123456
        },
        {
            username: 'jingjing',
            password: 888888
        }
    ]

    // 根据用户名和密码
    // 查询数据库，是否存在
    console.log(req.body);
    let {
        username,
        password
    } = req.body;
    let has = user.filter(item => username == item.username && password == item.password)
    if (has.length > 0) {
        res.send({
            code: 1,
            msg: 'success',
            data: []
        });
    } else {
        res.send({
            code: 0,
            msg: 'fail',
            data: []
        });
    }
});



app.listen(8011, () => { //开启服务器，端口号设置为8008
    console.log('server is running on http://localhost:8011');
});