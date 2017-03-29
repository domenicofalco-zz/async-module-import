const webpack = require('webpack')
const path = require('path')
const dynamicImport = require('babel-plugin-syntax-dynamic-import')

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: ['jquery', 'lodash', './app.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [['es2015', {modules: false}]],
            plugins: [dynamicImport]
          }
        }]
      }
    ]
  },
  node: {
    fs: 'empty'
  }
}

module.exports = config
