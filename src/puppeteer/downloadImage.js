// 爬取百度图片
const { downloadImagePath }  = require('./config');
const srcToImage  = require('./modules/srcToImage');
const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({
        // headless: false,
        // devtools: true,
    });
    const page = await browser.newPage();
    await page.setViewport({
        width: 1920,
        height: 1080,
    });
    // const www = {
    //     url: 'https://image.baidu.com/',
    //     input: '#kw',
    //     keyword: '风景壁纸',
    //     submit: '.s_search',
    //     imageClass: 'img.main_img',
    // };
    const www = {
        url: 'https://cn.bing.com/images/',
        input: '#sb_form_q',
        keyword: '风景壁纸',
        submit: '#sb_form_go',
        imageClass: 'img.mimg',
    };
    await page.goto(www.url);
    await page.focus(www.input);
    await page.keyboard.type(www.keyword, {delay: 100});
    await page.tap(www.submit);
    console.log('go to search list', www);
    page.on('load', async () => {
        console.log('page loaded!');
        const srcs = await page.evaluate(() => {
            const images = document.querySelectorAll('img.mimg');
            return [...images].map(img => img.src);
        });

        console.log(srcs, 'srcs');

        console.log(`get ${srcs.length} images, start download`);
        
        // console.log(downloadImagePath, 'downloadImagePath');

        for(let i = 0; i < srcs.length; i++){
            console.log(i);
            await page.waitFor(220);
            await srcToImage(srcs[i], downloadImagePath);
        }
        await browser.close();
    });
})();