const puppeteer = require('puppeteer-extra');
const ForceCustomLanguagePlugin = require('../index.js');

(async () => {
  puppeteer.use(ForceCustomLanguagePlugin({language: 'ja'}));
  const browser = await puppeteer.launch({headless: 'new'});
  
  const page = await browser.newPage();
  await page.goto('https://www.infobyip.com/browsergeolocation.php');
  await page.waitForTimeout(5000);
  await page.screenshot({ path: './test_01_geolocation.png', fullPage: true });

  const page2 = await browser.newPage();
  await page2.goto('https://browserleaks.com/geo');
  await page2.waitForTimeout(5000);
  await page2.screenshot({ path: './test_01_browserleaks.png', fullPage: true });

  const page3 = await browser.newPage();
  await page3.goto('https://www.airbnb.com');
  await page3.waitForTimeout(5000);
  await page3.screenshot({ path: './test_01_airbnb.png', fullPage: true });

  await browser.close();
  process.exit();
})();
