// next.config.js
const withOffline = require('next-offline');

module.exports = withOffline({
	workboxOpts: {
		generateInDevMode: true,
		swDest: '../public/service-worker.js', // this path is relative to the generated `.next` directory
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
