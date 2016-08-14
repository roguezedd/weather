const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StringReplacePlugin = require("string-replace-webpack-plugin");
const autoprefixer = require('autoprefixer');
const precss = require('precss');

const merge = require('webpack-merge');
const webpack = require('webpack');

const TARGET = process.env.npm_lifecycle_event;

const PKG = require('./package.json');

const PATHS = {
  app: path.join(__dirname, 'src'),
  style: path.join(__dirname, 'src/main.css'),
  build: path.join(__dirname, 'build'),
  assets: path.join(__dirname, 'assets'),
  images: path.join(__dirname, 'assets/images'),
  font: path.join(__dirname, 'assets/font')
};

var BASEURL = '//localhost:3000';

const common = {

  // Entry accepts a path or an object of entries.
  // We'll be using the latter form given it's
  // convenient with more complex configurations.
  entry: {
    app: PATHS.app,
    style: PATHS.style
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  devtool: 'source-map',
  plugins: [
    new StringReplacePlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack demo',
      template: PATHS.app + '/index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new ExtractTextPlugin('assets/[name].[chunkhash].css')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {}
  },
  module: {
    loaders: [
      { 
        test: /env.js$/,
        loader: StringReplacePlugin.replace({
          replacements: [
              {
                  pattern: /\[\[BASEURL\]\]/,
                  replacement: function (match, p1, offset, string) {
                    console.log(BASEURL);
                    return BASEURL;
                  }
              }
          ]
        })
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: PATHS.app
      },
      {
        // Test expects a RegExp! Note the slashes!
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss'),
        // Include accepts either a path or an array of paths.
        include: PATHS.app
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader:'file?name=/assets/images/[hash].[ext]',
        include: PATHS.images
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/i,
        loader:'file?name=/assets/font/[hash].[ext]',
        include: PATHS.font
      }
    ]
  },
  postcss: function () {
    return [autoprefixer, precss];
  }
};

// Default configuration. We will return this if
// Webpack is called outside of npm.
if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      // Enable history API fallback so HTML5 History API based
      // routing works. This is a good default that will come
      // in handy in more complicated setups.
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,

      // Display only errors to reduce the amount of output.
      stats: 'errors-only',

      // Parse host and port from env to allow customization.
      //
      // If you use Vagrant or Cloud9, set
      // host: process.env.HOST || '0.0.0.0';
      //
      // 0.0.0.0 is available to all network devices
      // unlike default localhost
      host: process.env.HOST,
      port: process.env.PORT

      // If you want defaults, you can use a little trick like this
      // port: process.env.PORT || 3000
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}

if(TARGET === 'build') {

  BASEURL = '';

  module.exports = merge(common, {
    entry: {
      // Set up an entry chunk for our vendor bundle.
      // You can filter out dependencies here if needed with
      // `.filter(...)`.
      vendor: Object.keys(PKG.dependencies)
    },
    output: {
      path: PATHS.build,
      filename: 'js/[name].[chunkhash].js',
      chunkFilename: '[chunkhash].js'
    },
    plugins: [
      new CleanWebpackPlugin([PATHS.build]),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
      })
    ]
  });
}