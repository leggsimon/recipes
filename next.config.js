const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
	pwa: {
		dest: 'public',
		runtimeCaching: runtimeCaching.map((rc) => {
			if (rc.options && rc.options.cacheName === 'static-image-assets') {
				return {
					...rc,
					options: {
						...rc.options,
						maxAgeSeconds: 24 * 60 * 60 * 14, // 2 weeks
					},
				};
			}

			return rc;
		}),
	},
});
