const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { AutomaticPrefetchPlugin } = require('webpack');


const devServer = (isDev) => !isDev ? {} : {
  devServer: {
    open: true,
    hot: true,
    port: 8080,
    // contentBase: path.join(__dirname, 'public'),// путь к папке статичных файлов
  }
};

module.exports = ({develop}) => ({
  mode: develop ? 'development' : 'production',
  // devtool: (develop) ? ('inline-source-map') : ('none'),// генерация
  entry: {
    app:'./src/index.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename:'assets/[hash][ext]', //hash
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
            test: /\.(woff(2)?|eot|ttf|otf)$/i,
            type: 'asset/resource',
        },
        {
          test:/\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
          test:/\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }
    ]
  },
  resolve: {
    extensions:['.ts','.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
        // title: 'Demo webpack'
        template:'./src/index.html'
    }),
    new MiniCssExtractPlugin ({
      filename:'[name].[contenthash].css'
    }),
    new CopyPlugin({
      patterns: [
        { from:'./public'} // если не указывать в TO-  то копировать файлы будут в корень ДИСТ
      ]
    }),
    new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),
  ],
  ...devServer(develop),
});