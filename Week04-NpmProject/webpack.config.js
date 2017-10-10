

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './public/javascripts/App.js',
    output: {path: __dirname, filename: './public/javascripts/bundle.js'},
    module: {
        loaders: [
            {
                test: /App.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {presets: ['env', 'react']}
            }
        ]
    },
};