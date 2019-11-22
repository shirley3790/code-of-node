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

//如果访问根目录，返回字符串“这是首页”给前端
app.get('/', (req, res) => {
    res.send('这是首页'); //类似php里面的echo
});

//需求：在前端想输入 http://localhost:8809/good/1  获取id是1的商品。http://localhost:8809/good/1 获取商品为2的商品，所以路由是变的，这里不存在参数

//动态路由的使用

// 商品详情页
// 动态路由：地址为变量

app.get('/goods/:id', (req, res) => {
    // 获取所有商品
    let goodslist = [{
        id: 1,
        name: 'iphonXs',
        price: 8998
    }, {
        id: 2,
        name: 'node7',
        price: 998
    }, {
        id: 3,
        name: 'lenovo',
        price: 1998
    }, {
        id: 4,
        name: 'hp',
        price: 5998
    }]

    //获取id这个变量:解构
    let {
        id
    } = req.params; //等效于let id = req.params.id

    // 获取对应商品
    let goods = goodslist.filter(item => item.id == id); //[{id}]
    goods = goods[0] ? goods[0] : {}; //避免返回undefined

    res.send(goods);

})



app.listen(8009, () => { //开启服务器，端口号设置为8008
    console.log('server is running on http://localhost:8809');
});