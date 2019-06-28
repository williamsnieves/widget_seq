const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const extractCSS = new MiniCssExtractPlugin({ filename: '[name].fonts.css' });
const extractSCSS = new MiniCssExtractPlugin({ filename: '[name].styles.css' });

console.log('BUILD_DIR', BUILD_DIR);
console.log('SRC_DIR', SRC_DIR);

module.exports = (env = {}) => {
	let pluginsData = [];
	if (env.prod) {
		pluginsData = [
			...pluginsData,
			new UglifyJsPlugin({
				uglifyOptions: {
					compress: {
						warnings: false
					}
				},
				sourceMap: true
			})
		];
	}
	return {
		entry: {
			index: [ SRC_DIR + '/index.js' ]
		},
		output: {
			path: BUILD_DIR,
			filename: '[name].bundle.js'
		},
		// watch: true,
		devtool: env.prod ? 'source-map' : 'cheap-module-eval-source-map',
		devServer: {
			contentBase: BUILD_DIR,
			//   port: 9001,
			compress: true,
			hot: true,
			open: true
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							cacheDirectory: true,
							presets: [ 'react', 'env', 'stage-0' ]
						}
					}
				},
				{
					test: /\.html$/,
					loader: 'html-loader'
				},
				{
					test: /\.(scss)$/,
					use: [ 'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
				},
				{
					test: /\.css$/,
					use: [ 'style-loader', MiniCssExtractPlugin.loader, 'css-loader' ]
				},
				{
					test: /\.(png|jpg|jpeg|gif|ico)$/,
					use: [
						{
							// loader: 'url-loader'
							loader: 'file-loader',
							options: {
								name: './img/[name].[hash].[ext]'
							}
						}
					]
				},
				{
					test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
					loader: 'file-loader',
					options: {
						name: './fonts/[name].[hash].[ext]'
					}
				}
			]
		},
		resolve: {
			alias: { '../img': '../public/img' }
		},
		optimization: {
			splitChunks: {
				chunks: 'all'
			}
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin(),
			new webpack.DefinePlugin({
				'process.env': env
			}),
			...pluginsData,
			new webpack.NamedModulesPlugin(),
			extractCSS,
			extractSCSS
		]
	};
};
