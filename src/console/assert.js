console.assert(true, 'does nothing');
// 通过
console.assert(false, 'Whoops %s', 'didn\'t work');
// AssertionError: Whoops didn't work

console.log(0, '输出0');
console.log(1, '输出-1');