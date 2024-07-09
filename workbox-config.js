module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{js,html,png}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};