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
// fs.unlink('./unlink.js', (err) => {
//     if(err) throw err;
//     console.log('删除成功！');
// });
