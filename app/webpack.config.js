var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './app.js',
  output: {
    path: './dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader']
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css', {
      allChunks: true
    })
  ],
  resolve: {
    alias: {
      actions: __dirname + '/actions',
      app_dispatcher: __dirname + '/dispatcher',
      components: __dirname + '/components',
      constants: __dirname + '/constants',
      stores: __dirname + '/stores',
      theme: __dirname + '/theme'
    }
  }
}
