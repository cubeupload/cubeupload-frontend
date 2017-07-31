var webpack = require('webpack');
var webpackConfig = require('webpack-config');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = new webpackConfig().merge({
    context: __dirname,
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    entry:
    {
        app: './src/app.ts',
        vendor: './src/vendor.ts',
        polyfills: './src/polyfills.ts'
    },
    devServer: {
        historyApiFallback: {
            index: '/index.html'
        },
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("css!sass")
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    output:
    {
        filename: 'js/[name].js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),
        new ExtractTextPlugin('css/style.css', {
            allChunks: true
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: { removeAll: true } },
            canPrint: true
        })
    ]
});