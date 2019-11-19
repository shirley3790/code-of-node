
//fs模块使用：文件读写，前端是无法读取硬盘文件的

let fs = require('fs');

/*
    fs方法：
        * readFile(url,cb) 异步读文件
            * url 要获取数据的路径
            * cb 回调函数
        * appendFile(url,data,cb) 写入文本（追加写入）
            * url 文件路径
            * data 要追加的数据
            * cb 回调函数
*/
fs.readFile('data/data.txt', (err, data) => {
    if (err) {
        // console.log('出错了：' + err);
        console.error('出错了：' + err);
    } else {
        console.log('data：' + data.toString());//把二进制转成普通文本
    }

});

//追加文件:appendFile()
// fs.appendFile('data/data.txt', '超神三阶段开始', err => {
//     if (err) {
//         //错误就打印错误信息
//         throw Error(err);
//     } else {
//         console.log('写入成功');
//     }
// });

//重写文件：
fs.writeFile('data/data.txt', '超神三阶段开始-你准备好了吗', err => {
    if (err) {
        //错误就打印错误信息
        throw Error(err);
    } else {
        console.log('写入成功');
    }
});