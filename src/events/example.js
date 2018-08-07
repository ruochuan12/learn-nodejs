const Events = require('events');
class EventsEmitter extends Events{};
// 创建 eventEmitter 对象
const eventsEmitter = new EventsEmitter();

// 创建事件处理程序
const connectHandler = () => {
    console.log('链接成功。');
    // 触发 data_received 事件
    eventsEmitter.emit('data_received');
};
// 绑定 connection 事件处理程序
eventsEmitter.on('connection', connectHandler);

// 使用匿名函数绑定 data_received 事件
eventsEmitter.on('data_received', () => {
    console.log('数据接收成功。');
});

// 触发 connection 事件
eventsEmitter.emit('connection');

console.log('程序执行完毕！');
// 输出
// 链接成功。
// 数据接收成功。
// 程序执行完毕！