const { LOCALES } = require('../locales.js');
const axios = require('axios');

(async () => {
	for (const locale in LOCALES) {
		let config = {
			method: 'get',
			url: `http://ip-api.com/json/${LOCALES[locale].ip}?fields=status,countryCode`,
			validateStatus: () => true,
		};
		const response = await axios.request(config);

		if (response.status === 200 && response.data.countryCode === LOCALES[locale].countryCode.toUpperCase()) {
			console.log(`[✅] ${locale} :: ${LOCALES[locale].ip}`)
		} else {
			console.log(`[❌] ${locale} :: ${LOCALES[locale].ip}`)
		}
	}
})();
