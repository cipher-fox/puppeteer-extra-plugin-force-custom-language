# puppeteer-extra-plugin-force-custom-language

> A plugin for [puppeteer-extra](https://github.com/berstend/puppeteer-extra/tree/master/packages/puppeteer-extra) and [playwright-extra](https://github.com/berstend/puppeteer-extra/tree/master/packages/playwright-extra) to force browser language.

<p align="center"><img src="https://i.imgur.com/e1IeCjp.png" /></p>

## Install

```bash
yarn add puppeteer-extra-plugin-force-custom-language
# - or -
npm install puppeteer-extra-plugin-force-custom-language
```

If this is your first [puppeteer-extra](https://github.com/berstend/puppeteer-extra) plugin here's everything you need:

```bash
yarn add puppeteer puppeteer-extra puppeteer-extra-plugin-force-custom-language
# - or -
npm install puppeteer puppeteer-extra puppeteer-extra-plugin-force-custom-language
```

## Usage

```js
// puppeteer-extra is a drop-in replacement for puppeteer,
// it augments the installed puppeteer with plugin functionality
const puppeteer = require('puppeteer-extra')

// add force language plugin and use defaults (all techniques)
const ForceCustomLanguagePlugin = require('puppeteer-extra-plugin-force-custom-language')
puppeteer.use(ForceCustomLanguagePlugin())

// puppeteer usage as normal
puppeteer.launch({ headless: true }).then(async browser => {
  console.log('Running tests..')
  const page = await browser.newPage()
  await page.goto('https://www.google.com')
  await page.waitForTimeout(5000)
  await page.screenshot({ path: 'testresult.png', fullPage: true })
  await browser.close()
  console.log(`All done, check the screenshot. ✨`)
})
```

## Plugin options

#### Table of Contents

- [language](#language)
- [ip](#ip)
- [httpHeaders](#httpheaders)
- [geoLocation](#geolocation)
- [javascript](#javascript)
- [requestInterceptionPriority](#requestinterceptionpriority)

## language
**TYPE**: string

**DEFAULT**: en

**DESCRIPTION**: Language code to use.
(Available options: [en,  zh,  ru,  fr,  es,  de,  pt,  it,  ja])

**USAGE**:
```javascript
const puppeteer =  require('puppeteer-extra')
const ForceCustomLanguagePlugin =  require('puppeteer-extra-plugin-force-custom-language')
puppeteer.use(ForceCustomLanguagePlugin({language: 'es'})) 
```
---
## ip
**TYPE**: boolean

**DEFAULT**: true

**DESCRIPTION**: Send a fake ip as origin via HTTP headers.

**USAGE**:
```javascript
const puppeteer =  require('puppeteer-extra')
const ForceCustomLanguagePlugin =  require('puppeteer-extra-plugin-force-custom-language')
puppeteer.use(ForceCustomLanguagePlugin({ip: true})) 
```
---
## httpHeaders
**TYPE**: boolean

**DEFAULT**: true

**DESCRIPTION**: Send a custom `Accept-Language` HTTP header.

**USAGE**:
```javascript
const puppeteer =  require('puppeteer-extra')
const ForceCustomLanguagePlugin =  require('puppeteer-extra-plugin-force-custom-language')
puppeteer.use(ForceCustomLanguagePlugin({httpHeaders: true})) 
```
---
## geoLocation
**TYPE**: boolean

**DEFAULT**: true

**DESCRIPTION**: Send a custom geographic coordinates.

**USAGE**:
```javascript
const puppeteer =  require('puppeteer-extra')
const ForceCustomLanguagePlugin =  require('puppeteer-extra-plugin-force-custom-language')
puppeteer.use(ForceCustomLanguagePlugin({geoLocation: true})) 
```
---
## javascript
**TYPE**: boolean

**DEFAULT**: true

**DESCRIPTION**: Set a custom `navigator.language` & `navigator.languages` javascript getters.

**USAGE**:
```javascript
const puppeteer =  require('puppeteer-extra')
const ForceCustomLanguagePlugin =  require('puppeteer-extra-plugin-force-custom-language')
puppeteer.use(ForceCustomLanguagePlugin({javascript: true})) 
```
---
## requestInterceptionPriority
**TYPE**: number

**DEFAULT**: -1

**DESCRIPTION**: Set the request interceptor priority. [See this](https://pptr.dev/guides/request-interception)

**USAGE**:
```javascript
const puppeteer =  require('puppeteer-extra')
const ForceCustomLanguagePlugin =  require('puppeteer-extra-plugin-force-custom-language')
puppeteer.use(ForceCustomLanguagePlugin({requestInterceptionPriority: 0})) 
```

---
## Contributing

PRs are welcome.

---

## License

Copyright © 2022 - 2022, [thewolfx41] Released under the MIT License.
