const fs = require('fs');
console.log('hello nodejs');
fs.readFile('./hello nodejs.js', (err, data) => {
    if(err){
        console.log(err);
    } else {
        console.log(data.toString());
    }
});
fs.createWriteStream('./unlink.js', (err) => {
    if(err) throw err;
    console.log('删除成功！');
});
// __filename 表示当前正在执行的脚本的文件名。它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。 
// 如果在模块中，返回的值是模块文件的路径。

console.log(__filename);
// fs.unlink('./unlink.js', (err) => {
//     if(err) throw err;
//     console.log('删除成功！');
// });
