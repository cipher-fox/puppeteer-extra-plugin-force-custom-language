const puppeteer = require('puppeteer-extra');
const ForceCustomLanguagePlugin = require('../index.js');

(async () => {
  puppeteer.use(ForceCustomLanguagePlugin({language: 'de'}));
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setRequestInterception(true)
  page.on('request', (request) => {
    if (['document'].includes(request.resourceType())) {
      console.log('>>', request.method(), request.url())
    }
    const headerOverride = request.headers();
    headerOverride['X-CUSTOM-HEADER-007'] = `ForceCustomLanguagePlugin`;
    request.continue({
      headers: headerOverride,
    }, 0);
  })
  page.on('response', (response) => {
    if (['document'].includes(response.request().resourceType())) {
      console.log('<<', response.status(), response.url())
      console.log(`   \\-----> X-CUSTOM-HEADER-007 ==> ${response.request().headers()['X-CUSTOM-HEADER-007']}`)
      console.log(`   \\-----> Accept-Language ==> ${response.request().headers()['Accept-Language']}\n`)
    }
  })
  await page.goto('https://www.google.com');
  await page.waitForTimeout(500);
  await page.screenshot({
    path: './test_02_google.jpeg',
    type: 'jpeg',
    quality: 100,
    fullPage: true,
  })
  await page.goto('https://www.airbnb.com');
  await page.waitForTimeout(500);
  await page.screenshot({
    path: './test_02_airbnb.jpeg',
    type: 'jpeg',
    quality: 100,
    fullPage: true,
  })
  await page.goto('https://www.facebook.com');
  await page.waitForTimeout(5000);
  await page.screenshot({
    path: './test_02_facebook.jpeg',
    type: 'jpeg',
    quality: 100,
    fullPage: true,
  })
  await browser.close();
  process.exit();
})();
