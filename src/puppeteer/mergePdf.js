const PDFMerge = require('pdf-merge');
const path = require('path');
const fs = require('fs');
// const { formatTime } = require('./modules/utils');

/**
 * @desc 返回路径
 * @author luoxiaochuan <lxchuan12@163.com>
 * @date 2018-08-25
 * @param {String} dir, dir2 字符串
 * @return {String} 路径
 */
function resolve(dir, dir2 = ''){
    return path.posix.join(__dirname, './', dir, dir2);
}

// 
const filenameArr = fs.readdirSync(resolve('reactMiniBook/'));

const sortedFilenameArr = filenameArr.sort((str1, str2) => {
    let regex = /^(\d{1,2})\./;
    let a = +str1.match(regex)[1];
    let b = +str2.match(regex)[1];
    return a - b;
});

// console.log(sortedFilenameArr);

const files = sortedFilenameArr.map((el) => {
    return resolve(`reactMiniBook/${el}`);
});

console.log('files', files);

// const files = [
// 	path.join(__dirname, './reactMiniBook/0. React小书 目录.pdf'),
// 	path.join(__dirname, './reactMiniBook/1. React.js 简介.pdf'),
// ];

console.log('let\'s start merge...');

const filename = `React小书（完整版）-作者：胡子大哈-${Date.now()}.pdf`;

const output = resolve(`reactMiniBookMerged/${filename}`);

// Save as new file
PDFMerge(files, {
    output: output,
})
.then((buffer) => {
    console.log('merge success!');
});