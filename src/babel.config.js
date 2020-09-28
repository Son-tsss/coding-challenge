module.exports = {
	babelrc: false,
	cacheDirectory: true,

	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					browsers: ['last 2 versions', 'ie >= 11', 'not dead'],
				},
			},
		],
		'@babel/preset-typescript',
		'@babel/preset-react',
	],

	plugins: [
		"@babel/plugin-syntax-dynamic-import",
		'@babel/transform-runtime',
	],
};