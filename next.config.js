// next.config.js
const withOffline = require('next-offline');

module.exports = withOffline({
	generateInDevMode: true,
	workboxOpts: {
		runtimeCaching: [
			{
				urlPattern: /public\/images/,
				handler: 'CacheFirst',
			},
			{
				urlPattern: /api/,
				handler: 'NetworkFirst',
				options: {
					cacheableResponse: {
						statuses: [0, 200],
					},
				},
			},
		],
	},
});
