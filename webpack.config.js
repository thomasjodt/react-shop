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
const imageRules = {
  test: /\.(png|jpg|svg|gif)$/,
  type: 'asset'
}

const rules = [jsRules, htmlRules, cssRules, imageRules]

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
    clean: true,
  },
  module: {rules},
  resolve: { 
    extensions: ['.js', '.jsx'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@containers': path.resolve(__dirname, 'src/containers/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@icons': path.resolve(__dirname, 'src/assets/icons/'),
      '@logos': path.resolve(__dirname, 'src/assets/logos/'),
    }
  },
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