const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    assetModuleFilename:'assets/[name][ext]',
  },
  module: {
    rules: [
        {
            test: /\.[tj]s$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        {
            test:/\.(?:ico|gif|png|jpg|jpeg|svg})$/i,
            type:'asset/resource',
        },
        {

        },
    ]
  },
  resolve: {
    extensions:['.ts','.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Demo webpack'
    }),
  ],
};