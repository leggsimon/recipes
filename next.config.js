const withPWA = require('next-pwa');

module.exports = withPWA({
	pwa: {
		dest: 'public',
		runtimeCaching: {
			urlPattern: /\/_next\/image?url=.*$/i,
			handler: 'StaleWhileRevalidate',
			options: {
				cacheName: 'next-image',
				expiration: {
					maxEntries: 32,
					maxAgeSeconds: 24 * 60 * 60 * 2, // 48 hours
				},
			},
		},
	},
});
