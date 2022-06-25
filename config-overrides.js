const path = require('path');

// config-overrides.js
module.exports = function override(config, env) {
	config.resolve = {
		...config.resolve,
		alias: {
			'@': path.resolve(__dirname, 'src/'),
		}
	};

	return config;
}
