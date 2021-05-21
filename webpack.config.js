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
            {
                // test: /\.css$/i,
                // use: ["style-loader", "css-loader"],
                test: /\.css$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "assets/[name].[ext]",
                        },
                    },
                    {
                        loader: "extract-loader",
                        options: {
                            publicPath: "../",
                        }
                    },
                    {
                        loader: "css-loader",
                    },
                ],
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json', 'html']
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [new HtmlWebpackPlugin()]
};
