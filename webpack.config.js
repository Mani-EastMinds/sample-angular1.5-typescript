var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './app/app.core.module.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'
      },
      { test: /\.css$/, use: 'css-loader' },
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ],
        resolve: {
          extensions: ['.ts', '.js', '.json']
        }
      },
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: path.resolve('index.html') })],

  devServer: {
    port: 8000,
    open: 'chrome'
  }
}