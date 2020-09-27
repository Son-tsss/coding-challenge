const path = require('path');
const webpack = require('webpack');

const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolveRelativePath = (relativePath) => path.resolve(__dirname, relativePath);

const babelOptions = require('./src/babel.config.js');

const publicPath = '/';

module.exports = {
	devtool: 'cheap-module-source-map',

	entry: [
		'./src/index.tsx',
	],

	output: {
		path: resolveRelativePath('./dist'),
		filename: 'assets/[name].js',
		publicPath,
		pathinfo: true,
	},

	plugins: [
		// Generates an `index.html` file with the <script> injected.
		new HtmlWebpackPlugin(
			{
				inject: true,
				template: resolveRelativePath('./src/static/index.html'),
			},
		),

		// This is necessary to emit hot updates (currently CSS only):
		// new webpack.HotModuleReplacementPlugin(),

		// Watcher doesn't work well if you mistype casing in a path so we use
		// a plugin that prints an error when you attempt to do this.
		// See https://github.com/facebook/create-react-app/issues/240
		new CaseSensitivePathsPlugin(),
	],

	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.jsx'],
	},

	module: {
		rules: [
			{
				test: /\.module.scss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: {
								localIdentName: '[name]__[local]--[hash:base64:5]',
							},
							importLoaders: 1,
						},
					},
					'sass-loader',
				],
			},
			{
				test: /^((?!\.module).)*\.(scss|css)$/,
				loaders: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(jsx?|tsx?)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: babelOptions,
				}
			},
		],
	},

	devServer: {
		publicPath,
		port: 11000,
		historyApiFallback: {
			disableDotRule: true,
		},
		disableHostCheck: true,
		hot: true,
		clientLogLevel: 'none',
		contentBase: resolveRelativePath('../src/static'),
		headers: {'Access-Control-Allow-Origin': '*'},
		stats: {
			children: false,
			assets: false,
			chunks: false,
			chunkModules: true,
			modules: false,
			hash: false,
			version: false,
		}
	}
};