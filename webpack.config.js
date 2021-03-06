const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');


module.exports = (env, options) => {
  const isProduction = options.mode === 'production';
  console.log(isProduction ? "Production build" : "Development build");

  return {
    entry: './src/index.js',
    mode: 'none',
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
              ],
              plugins: [
                "@babel/plugin-proposal-class-properties"
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
            {
              loader: 'postcss-loader', options: {
                sourceMap: isProduction,
                plugins: () => [require('autoprefixer'), require('postcss-font-magician')]
              }
            },
            { loader: 'sass-loader', options: { sourceMap: isProduction } }
          ]
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      })
    ],
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      port: 8001,
      hot: true,
      open: true,
      after: function(app, server) {
        console.log("Good luck in development!!!\n");
      }
    }
  }
};
