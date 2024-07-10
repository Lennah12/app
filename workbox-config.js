module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{png,js,html,json,m,md}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};