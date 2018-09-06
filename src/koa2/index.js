const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

console.log(router, 'router');

// const bodyParser = require('koa-bodyparser');
// app.use(bodyParser);


router.get('/', ctx => {
    ctx.body = '这是主页';
});

router.get('/user', ctx => {
    ctx.body = '这是user页';
});

router.get('/json', ctx => {
    ctx.body = {
        data: [],
        msg: '信息',
        code: '0',
    };
});

router.get('/post', ctx => {
    ctx.body = ctx.body = ctx.request.body;
});

router.get('/async', async ctx => {
    const sleep = async (ms) => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(true);
            }, ms);
        });
    };

    await sleep(1000);
    ctx.body = '这是异步处理页';
})

app.use(router.routes())
    .use(router.allowedMethods());

// response
// app.use(ctx => {
//   ctx.body = `您的网址路径为${ctx.response.url}`;
// });

app.listen(3000);