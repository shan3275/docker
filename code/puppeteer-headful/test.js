const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth')

console.log("node test.js running");
(async () => {
    try {
      puppeteer.use(StealthPlugin())
      var browser = await puppeteer.launch({
          headless: false,
          executablePath: 'chromium'
        });
      var page = await browser.newPage();
      await page.goto(`https://www.tiktok.com/@miss_extra2.0`);
      await page.waitFor(5000)
      await page.screenshot({ path: '/home/pptruser/Downloads/example.png' });
      console.log("have open the url");
      await browser.close();
    } catch (err) {
      await browser.close();
    }
  })();