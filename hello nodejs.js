const fs = require('fs');
console.log('hello nodejs');
fs.readFile('./hello nodejs.js', (err, data) => {
    if(err){
        console.log(err);
    } else {
        console.log(data.toString());
    }
});
