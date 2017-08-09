var webpack = require('webpack');
var webpackConfig = require('webpack-config');

module.exports = new webpackConfig().extend('./webpack.config.js').merge({
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': '"local-develop"',
                'API_URL': '"http://beta.cubeupload.com/api"',
            }
        }),
    ],
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:4000',
            'Access-Control-Allow-Methods': 'GET,OPTIONS,HEAD,PUT,POST,DELETE,PATCH',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Authorization, X-Request-With',
            'Access-Control-Allow-Credentials': 'true'
        }
    }
})