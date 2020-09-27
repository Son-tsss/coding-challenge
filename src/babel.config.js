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
		[
			'babel-plugin-import',
			{
				'libraryName': '@material-ui/core',
				// Use "'libraryDirectory': ''," if your bundler does not support ES modules
				'libraryDirectory': 'esm',
				'camel2DashComponentName': false
			},
			'core'
		],
		[
			'babel-plugin-import',
			{
				'libraryName': '@material-ui/Icons',
				// Use "'libraryDirectory': ''," if your bundler does not support ES modules
				'libraryDirectory': 'esm',
				'camel2DashComponentName': false
			},
			'Icons'
		],
		[
			'babel-plugin-import',
			{
				'libraryName': '@material-ui/styles',
				// Use "'libraryDirectory': ''," if your bundler does not support ES modules
				'libraryDirectory': 'esm',
				'camel2DashComponentName': false
			},
			'styles'
		],
		//'@babel/plugin-proposal-class-properties'
	],
};