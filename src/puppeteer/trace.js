const puppeteer = require('puppeteer');
const path = require('path');
const devices = require('puppeteer/DeviceDescriptors');
const iPhone = devices['iPhone X'];
(async () => {
    const browser = await puppeteer.launch({
        headless: true,
        // devtools: true,
    });
    const page = await browser.newPage();
    await page.emulate(iPhone);
    await page.tracing.start({
        path: path.join(__dirname, './trace/trace.json'),
    });
    await page.goto('http://lxchuan12.github.io');
    await page.tracing.stop();
    await browser.close();
})();