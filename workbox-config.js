module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{png,js,html,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};