const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const jsRules = {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: { loader: 'babel-loader'}
}
const htmlRules = {
    test: /\.html/,
    use: { loader: 'html-loader'},
}

const rules = [jsRules, htmlRules]

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    module: {rules},
    resolve: { extensions: ['.js', '.jsx'] },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.html'
        }),
    ]

}