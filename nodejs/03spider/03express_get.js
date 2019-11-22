const express = require('express'); //引入express模块

const app = express();

/*
    get(root,fn)方法用来响应前端的get请求，如果前端访问根目录，就响应一些内容给前端
        * 参数一：root 路径，可以是真实的，也可以是虚拟的路径，这就是路由
        * 参数二：fn  回调函数,里面有两个参数
            * 参数一：request 请求对象 req
            * 参数二：responst对象 res
                * 方法
                    * res.send() 可以给前端做出响应，发数据给前端，类似php的echo

*/

// 静态资源服务器
// 中间件：express.static
app.use(express.static('./'));

//设置路由

//如果访问根目录，返回字符串“这是首页”给前端
app.get('/', (req, res) => {
    res.send('这是首页'); //类似php里面的echo
});

//如果前端访问cart，并且是get请求，就返回cartlist数据给前端
app.get('/cart', (req, res) => {
    let cartlist = [{
        id: 1,
        name: 'iphonXs',
        price: 8998
    }, {
        id: 2,
        name: 'node7',
        price: 998
    }]
    res.send(cartlist);
});

//如果前端访问cart，并且是post请求，就返回“shopping car post”给前端，但是前端输入url回车发起的请求是get请求，所以建议安装一个postman发起post请求。或者加上点击事件，通过ajax的type修改成post请求
app.post('/cart', (req, res) => {
    res.send('shopping car post')
})

app.listen(8008, () => { //开启服务器，端口号设置为8008
    console.log('server is running on http://localhost:8808');
});