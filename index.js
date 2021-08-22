const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: {
      width: 1024,
      height: 768,
    },
  });
  const page = await browser.newPage();
  await page.goto('https://learnscraping.com/');

  // await browser.close();
  debugger;
})();
