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

//获取前端的参数信息
// 搜索功能
// 获取get请求参数：req.query
app.get('/search', (req, res) => { //在前端输入：http://localhost:8008/search?keyword=html5 回车的时候，后端就可以获取到数据keyword=html5,并且已经转成了对象{keyword : html5}
    console.log(req.query);
    // console.log(req.query.keyword);
    // 1.获取到搜索关键字
    // 2.根据关键字查询数据库
    // 3.把结果返回给前端
    res.send('这是数据');
});

//应用：获取列表信息
app.get('/list', (req, res) => { //前端输入：http://localhost:8808/list?category=phone 就可以获取到手机相关数据；输入：http://localhost:8808/list?category=computer 就可以获取到电脑相关数据
    // 获取商品类型
    let category = req.query.category;

    // mysql
    // let sql = `select * from goods where category=${category}`
    let phones = [{
        id: 1,
        name: 'iphonXs',
        price: 8998
    }, {
        id: 2,
        name: 'node7',
        price: 998
    }];
    let computers = [{
        id: 3,
        name: 'lenovo',
        price: 1998
    }, {
        id: 4,
        name: 'hp',
        price: 5998
    }];
    let goodslist = null;
    switch (category) {
        case 'phone':
            goodslist = phones;
            break;
        case 'computer':
            goodslist = computers;
            break;
        default:
            goodslist = []
    }

    res.send(goodslist);
});



app.listen(8009, () => { //开启服务器，端口号设置为8008
    console.log('server is running on http://localhost:8809');
});