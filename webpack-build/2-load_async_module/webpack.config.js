const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const ManifestPlugin = require('webpack-manifest-plugin')
const base = require('../webpack.base.js')

module.exports = merge(base, {
  entry: {
    app: path.resolve(__dirname, 'src/main.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new ManifestPlugin()
  ]
})