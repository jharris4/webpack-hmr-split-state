var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var isDev = process.env.NODE_ENV !== 'production';

var appConfig = require('./config');

module.exports = {
  devtool: isDev ? 'cheap-module-source-map' : 'source-map',
  entry: {
    main: getEntry(['./src/index']),
    vendors: ['babel-polyfill', 'react', 'react-dom', 'react-router']
  },
  output: {
    path: path.join(__dirname, appConfig.outputPath),
    filename: appConfig.bundleNameJS,
    chunkFileName: appConfig.bundleNameJS,
    publicPath: appConfig.publicPath
  },
  plugins: getPlugins([
    new webpack.optimize.CommonsChunkPlugin('vendors', appConfig.bundleNameJS),
    new HtmlWebpackPlugin({
      filename: appConfig.indexFilename,
      template: appConfig.templatePath,
      inject: false
    }),
  ]),
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader?' + JSON.stringify({ cacheDirectory: true })],
        include: [path.resolve(__dirname, 'src')]
      }
    ]
  },
  target: "web"
};

function getEntry(entries) {
  if (isDev) {
    entries.unshift(
      'eventsource-polyfill',
      'webpack-hot-middleware/client',
      'react-hot-loader/patch'
    );
  }
  return entries;
}

function getPlugins(plugins) {
  if (isDev) {
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    );
  }
  else {
    plugins.push(
      new webpack.DefinePlugin({'process.env': {'NODE_ENV': JSON.stringify('production')}}),
      // new webpack.optimize.UglifyJsPlugin({
      //   compress: {
      //     warnings: showUglifyWarnings
      //   }
      // }),
      new webpack.optimize.OccurenceOrderPlugin()
    );
  }
  return plugins;
}