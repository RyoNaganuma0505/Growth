
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ManifestPlugin = require('webpack-manifest-plugin')
// const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
  // require('dotenv').config({ path: __dirname + '/.env.' + env });
  entry: ['babel-polyfill', path.join(__dirname, 'src', 'index.tsx')],
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env", "@babel/preset-typescript", "@babel/preset-react"]
          }
        },
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.(jpg|png|svg)$/,
        loaders: 'url-loader',
      },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    // new FaviconsWebpackPlugin('./public/Klink.png'),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: 'build',
    inline: true,
    hot: true,
    port: 3090,
  },
};
