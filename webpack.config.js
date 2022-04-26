const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const jsRules = {
  test: /\.(m?js|jsx)$/,
  exclude: /node_modules/,
  use: { loader: 'babel-loader'}
}
const htmlRules = {
  test: /\.html/,
  use: { loader: 'html-loader'},
}
const cssRules = {
  test: /\.(sc|sa|c)ss$/i,
  use : ['style-loader', 'css-loader', 'sass-loader']
}

const rules = [jsRules, htmlRules, cssRules]

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
    clean: true,
  },
  module: {rules},
  resolve: { extensions: ['.js', '.jsx'] },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html'
    }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
    open: true,
    port: 8080,
  }

}