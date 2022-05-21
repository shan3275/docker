const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ executablePath: 'chromium' });
  
  const page = await browser.newPage();
  await page.goto('https://www.youtube.com');
  await page.screenshot({ path: '/home/pptruser/Downloads/example.png' });

  await browser.close();
})();