var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './CallsitCode.js',
    output: {path: __dirname, filename: './public/javascripts/bundle.js'},
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {presets: ['env', 'react']}
            }
        ]
    },
};