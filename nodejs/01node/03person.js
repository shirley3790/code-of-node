let person = { //声明一个对象
    name: '杨超越',
    age: '18',
    gender: '女'
}

//导出模块==暴露模块,如果没有这句话，引入模块时 就会得到 undefined。
//一个文件只能有一个module.exports,出现多个会被覆盖掉
module.exports = person;