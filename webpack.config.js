const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/app.ts',
    devtool: 'inline-source-map',
    mode: 'production',
    module: {
        rules: [
            {
                test:/\.ts/,
                use: ['ts-loader'],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/views/index.html",
            filename: "index.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/views/index1.html",
            filename: "index1.html"
        })
    ]
};
