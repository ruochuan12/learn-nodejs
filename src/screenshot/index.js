const puppeteer = require('puppeteer');
const path = require('path');
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // await page.goto('https://www.yunpanjingling.com/');
    // await page.goto('https://lxchuan12.github.io');
    await page.goto('https://www.baidu.com');
    console.log(path.join(__dirname, './source'));
    const userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1';
    page.setUserAgent(userAgent);
    await page.screenshot({
        path: path.join(__dirname, `./source/${Date.now()}.png`),
    });
    await browser.close();
})();