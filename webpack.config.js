const path = require('path');

const outputPath = path.join(__dirname, 'dist')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const mode = 'development'

const rendererConfig = {
  mode: mode,
  target: 'electron-renderer',
  entry: './build/renderer.js',
  output: {
    path: outputPath,
    filename: 'renderer.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
}

module.exports = [rendererConfig]
