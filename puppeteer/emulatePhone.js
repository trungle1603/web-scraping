const puppeteer = require('puppeteer');
const pixel = puppeteer.devices['Pixel 2 XL'];

(async () => {
  /* 3. Emulate a phone */
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.emulate(pixel);
  await page.goto('https://learnscraping.com/');

  // await browser.close();
  debugger;
})();
