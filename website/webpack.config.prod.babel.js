/* eslint-env node */
const Merge = require('webpack-merge')
const MinifyPlugin = require('babel-minify-webpack-plugin')
const CommonConfig = require('./webpack.config.babel.js')

module.exports = Merge(CommonConfig, {
  devtool: 'none',
  plugins: [
    new MinifyPlugin()
  ]
})
