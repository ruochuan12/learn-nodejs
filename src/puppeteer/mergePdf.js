const PDFMerge = require('pdf-merge');
const path = require('path');
const fs = require('fs');
const { formatTime } = require('./modules/utils');

// 
const filenameArr = fs.readdirSync(path.join(__dirname, './reactMiniBook/'));

const sortedFilenameArr = filenameArr.sort((str1, str2) => {
    let regex = /^(\d{1,2})\./;
    let a = +str1.match(regex)[1];
    let b = +str2.match(regex)[1];
    console.log(a, b);
    return a - b;
});

console.log(sortedFilenameArr);

const files = sortedFilenameArr.map((el) => {
    return path.posix.join(__dirname, `./reactMiniBook/${el}`);
});

console.log('files', files);

// const files = [
// 	path.join(__dirname, './reactMiniBook/0. React小书 目录.pdf'),
// 	path.join(__dirname, './reactMiniBook/1. React.js 简介.pdf'),
// ];

console.log('let\'s start merge...');

const filename = `React小书（完整版）-作者：胡子大哈-${Date.now()}.pdf`;

const output = path.posix.join(__dirname, `./reactMiniBookMerged/${filename}`);

// Save as new file
PDFMerge(files, {
    output: output,
})
.then((buffer) => {
    console.log('merge success!');
});