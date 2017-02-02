var webpack = require('webpack');
var webpackConfig = require('webpack-config');

module.exports = new webpackConfig().extend('./webpack.config.js').merge({
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': '"local-develop"',
                'API_URL': '"http://cubeupload.com/api"',
            }
        }),
    ]
})