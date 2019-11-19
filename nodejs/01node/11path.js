//querystring模块的使用

const qs = require('querystring');

let str = 'name=tiantian&age=18';

let tt = qs.parse(str);//将字符串转成对象，类似JSON.parse()

console.log(tt);//{name:tiantian,age:18}

let str2 = qs.stringify(tt);//把对象转成字符串。类似JSON.stringify()

console.log(str2);//'name=tiantian&age=18'


//path模块的使用
let path = require('path');

let pathobj = path.parse('/home/user/dir/file.txt');
console.log(pathobj);

//上面结果在node环境中显示:

// pathobj = {
//     root: '/', //根目录
//     dir: '/home/user/dir',//路径
//     base: 'file.txt', //文件名
//     ext: '.txt',//后缀
//     name: 'file'//文件名无后缀
// }

//在window上
// 返回:
// { root: 'C:\\',
//   dir: 'C:\\path\\dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }
