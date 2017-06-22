const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },

    devServer: {
        hot: true,
        inline: true,
        quiet: true,
        clientLogLevel: 'warning',
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    }
}