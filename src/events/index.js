const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
    console.log('哎呀，触发了一个事件~~');
});
myEmitter.emit('event');