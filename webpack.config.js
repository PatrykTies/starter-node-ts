const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

const getAssetPath = name => path.resolve(__dirname, 'src', 'assets', name)

module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        plugins: [new TsconfigPathsPlugin()]
    },
    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['prod']),
    ],
    output: {
        filename: 'prod.bundle.js',
        path: path.resolve(__dirname, 'prod')
    }
}