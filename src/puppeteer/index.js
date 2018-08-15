const puppeteer = require('puppeteer');
const path = require('path');
const devices = require('puppeteer/DeviceDescriptors');
const iPhone = devices['iPhone X'];
(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        // devtools: true,
    });
    const page = await browser.newPage();
    await page.emulate(iPhone);
    await page.goto('https://lxchuan12.github.io');

    // await page.goto('https://www.yunpanjingling.com/');
    // await page.screenshot({
    //     path: path.join(__dirname, `./screenshot/${Date.now()}.png`),
    // });
    // await page.$('.word');
    // await page.keyboard.type('imooc', {delay: 100});
    // await page.tap('.btn-submit');
    
    // await page.setViewport({width:1920, height:1080});
    // await page.goto('https://wx.zsxq.com/dweb/#/index/881822445252');
    // console.log(path.join(__dirname, './source'));
    // const userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1';
    // page.setUserAgent(userAgent);
    // page.setCookie({
    //     name: 'access_token',
    //     value: '7429D910-29C9-A656-EE17-70341324E0D2',
    //     domain: 'wx.zsxq.com',
    //     path: '/dweb',
    //     expires: 1534554731000,
    // });
    // console.log(await page.cookies('https://wx.zsxq.com/dweb/#/index/881822445252'));
    await page.screenshot({
        path: path.join(__dirname, `./screenshot/${Date.now()}.png`),
    });
    console.log(await browser.version());
    await browser.close();
})();