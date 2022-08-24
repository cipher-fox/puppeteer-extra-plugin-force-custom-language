const puppeteer = require('puppeteer-extra');
const ForceCustomLanguagePlugin = require('./index.js');

(async () => {
  puppeteer.use(ForceCustomLanguagePlugin({language: 'ru', ip: true, javascript: true, geoLocation: true, httpHeaders: true, requestInterceptionPriority: -1}));
  const browser = await puppeteer.launch({headless: false, args: ['--lang="en_EN"'],  env: {LANG: 'en_EN.UTF-8'}});
  const page = await browser.newPage();
  await page.goto('https://www.infobyip.com/browsergeolocation.php');

  const page2 = await browser.newPage();
  await page2.goto('https://browserleaks.com/geo');

  const page3 = await browser.newPage();
  await page3.goto('https://www.google.com/travel/hotels/centric%20atiram/entity/CgsI1Mqf-I_Lq8jMARAB/reviews')

  await page.waitForTimeout(1000000000);
  await browser.close();
  process.exit();
})();
