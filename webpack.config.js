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
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      }
    ]
  },
  plugins: [
  ]
}