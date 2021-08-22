const puppeteer = require('puppeteer');
const dotenv = require('dotenv');

dotenv.config({ path: '../config.env' });

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://dkhp.hcmue.edu.vn/');

  await page.waitForTimeout(1000);
  await page.waitForSelector('input[name="username"]');
  await page.type('input[name="username"]', process.env.DKHP_USER_NAME);
  await page.type('input[name="password"]', process.env.DKHP_PASSWORD);
  await page.click('body > form > div > div > div.loginbox-submit > input');
  await page.waitForTimeout(1000);

  // await browser.close();
  debugger;
})();
