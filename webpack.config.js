const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

module.exports = {
    mode: "production",
    devtool: "source-map",
    entry: { home: ['./src/index.tsx', './src/index.scss'], },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".scss"],
        alias: {
            '@components': path.resolve(__dirname, './src/components'),
            '@state': path.resolve(__dirname, './src/state'),
        }
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.min.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: require.resolve('style-loader'),
                    },
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: require.resolve('css-loader'),
                    },
                    {
                        loader: require.resolve('postcss-loader'),
                    },
                    {
                        loader: require.resolve('sass-loader'),
                    },
                ]
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [{
                    loader: "awesome-typescript-loader"
                }]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'main-[hash:20].css',
            chunkFilename: '[id].css',
            ignoreOrder: false
        })
    ],
};