const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      }, {
        test: /\.s(a|c)ss$/,
        exclude: /node_modules/,
        use: [
          isProduction
          ? MiniCssExtractPlugin.loader
          : { loader: 'style-loader', options: { sourceMap: true } },
          { loader: 'css-loader', options: { sourceMap: isProduction } },
          { loader: 'postcss-loader', options: { sourceMap: isProduction } },
          { loader: 'sass-loader', options: { sourceMap: isProduction } }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'App',
      meta: {
        viewport: 'width=device-width, initial-scale=1'
      }
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8008,
    hot: true,
    open: true,
    after: function(app, server) {
      console.log("Good luck in development!!!\n");
    }
  }
};
