const fs = require('fs');

/*
    stream流    
        * fs.createReadStream() 读文件，以流的方式
        * fs.createWriteStream() 写文件，以流的方式
*/

// 以流的方式读取input.txt中的内容
let readerStream = fs.createReadStream('about.txt');//小文件用fs.readFile()是可以的，但是不够流方式好
console.log(readerStream);//返回一个对象，但是我们想用的是里面的某些属性值

let data = '';
readerStream.on('data', chunk => {//data事件：数据读取的时候触发
    //chunk为数据块（不完整的数据）
    // console.log(chunk.toString());//buffer 二进制，数组形式的
    data += chunk;
});

readerStream.on('end', () => {//end事件：数据接收完触发
    // 数据读取完毕，执行这里的代码
    console.log(data);
});


// 可写流
let writerStream = fs.createWriteStream('output.txt');//没有该文件会自动创建，有就被覆盖
writerStream.write('我们不一样；');
writerStream.write('有啥不一样；');
writerStream.write('其实也一样；');

// 标记文件末尾
writerStream.end();//告诉writerStream我们已经写完数据，结束标记
writerStream.on('finish', function () {//finish事件：写入完成的事件
    console.log("写入完成。");
});