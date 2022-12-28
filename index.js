const puppeteer = require('puppeteer');

async function run() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.traversymedia.com');

    //await page.screenshot({ path: 'example.png' });

    //const html = await page.content();
    
    //const title = await page.evaluate(() => document.title);
    
    const links = await page.evaluate(() => document.body.innerText);
    console.log(links)
    
    await browser.close();
}

run();