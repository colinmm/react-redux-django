var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

var ip = 'localhost';

module.exports = {
	context: __dirname,

	entry: {
  	App: [
  	   'webpack-dev-server/client?http://' + ip + ':3000',
  	   'webpack/hot/only-dev-server',
  	   './reactjs/index',
  	],
  	vendors: ['react'],
	},

	output: {
    path: path.resolve('./static/bundles/local/'),
    filename: "[name]-[hash].js",
    publicPath: 'http://' + ip + ':3000' + '/assets/bundles/'
	},

	devtool: "#eval-source-map",

	externals: [
	],

	plugins: [
  	new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
  	new webpack.HotModuleReplacementPlugin(),
	  new webpack.NoErrorsPlugin(),
  	new BundleTracker({filename: './webpack-stats.json'}),
	],

	module: {
  	loaders: [
  		{
  			est: /\.jsx?$/, 
  			exclude: /node_modules/, 
  			loader: ['babel'],
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
  		}
  	] 
	},

	resolve: {
  	modulesDirectories: ['node_modules', 'bower_components'],
  	extensions: ['', '.js', '.jsx']
	},
}