const path = require('path');
console.log('basename', path.win32.basename('C:\\temp\\myfile.html'));
console.log('basename', path.posix.basename('C:\\temp\\myfile.html'));
console.log('basename', path.extname('C:\\temp\\myfile.html'));
const result = 'foo/bar/baz'.split(path.sep);
console.log(result);
const win32 = path.win32;
console.log(win32);