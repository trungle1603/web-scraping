const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Performance using block image, css, font
  await page.setRequestInterception(true);
  page.on('request', req => {
    // if (req.resourceType() === 'image' || req.resourceType() === 'stylesheet') {
    if (['image', 'stylesheet', 'font'].includes(req.resourceType())) {
      req.abort();
    } else {
      req.continue();
    }
  });

  await page.goto('https://amazon.com/');

  // await browser.close();
  debugger;
})();
