//一个文件只能有一个module.exports,出现多个会被覆盖掉

//想在一个模块里面一次性暴露多个接口那就用exports

//接口一:
function show() {
    console.log('我是show函数功能');
}

//接口二：
function sum(a, b) {
    //实现两个数相加
    let num = a + b;
    console.log('两个数的和是：' + num);
}

//暴露两个接口
exports.show = show;
exports.sum = sum;