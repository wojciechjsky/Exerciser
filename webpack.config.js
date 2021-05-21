const path = require("path");
require("html-loader");

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        bundle:'./src/app.ts',
        // index:'./src/index.html',
    },
    devtool: 'inline-source-map',
    mode: 'production',
    module: {
        rules: [
            {
                test:/\.ts/,
                use: ['ts-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.html$/i,
                use: ['html-loader'],
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json', 'html']
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [new HtmlWebpackPlugin()]
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: "./src/views/index.html",
    //         filename: "index.html"
    //     }),
    //     new HtmlWebpackPlugin({
    //         template: "./src/views/index1.html",
    //         filename: "index1.html"
    //     })
    // ]
};
