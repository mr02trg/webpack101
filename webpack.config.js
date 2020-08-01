const  path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  module: {
    rules: [
      // allow css to be loaded into your js file instead of declare it explicitly from index.htmn header
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'       
        ]
      }
    ]
  },
  plugins: [
  ]
}