//导入模块

//ES6的解构
// let { show, sum } = require('./05exports');


// console.log(show);
// show();//show是一个函数

// sum(1, 2);//sum是函数并可以接收两个实参

//把方法都放在一个对象里面，用.来调用各个方法
let fns = require('./05exports');
console.log(fns);

fns.show();
fns.sum(2, 3);