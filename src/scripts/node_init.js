const cp = require('child_process');
const path = require('path');

cp.execFile(path.join(__dirname, './init.sh'), function(err, stdout, stderr){
    if(err){
        console.log('执行失败');
        console.log(err, stdout, stderr);
    }
    else{
        console.log('执行成功');
        console.log(err, stdout, stderr);
    }
});