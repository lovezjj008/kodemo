var config = require('./webpack.base.config'),
  path = require('path'),
  webpack = require('webpack');
var merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin');
var Dashboard = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');
var dashboard = new Dashboard();

config = merge(config, {
  entry: {
    app: './src/app.js'
  },
  externals: {
    'knockout': 'window.ko',
    'jquery': 'window.$'
  },
  devtool: 'inline-source-map',
  devServer: {
    quiet: true,
    contentBase: '../dist',
    hot: true,
    proxy: {
      '/equipmanage/': {
        target: 'http://133.128.14.232:9190/',
        secure: false,
        changeOrigin: true,
        host: "133.128.14.232"
      },
      '/yuncai/': {
        target: 'http://yc.yonyon.com',
        secure: false,
        changeOrigin: true,
        host: "yc.yonyon.com"
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'ko-template'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor'],
    }),
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin(dashboard.setData),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('dev')
    })
  ]
})
module.exports = config
