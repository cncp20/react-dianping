// webpack.config.js
var path = require("path");
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    bundle:['./src/index.js'],
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: "/build/",
    filename: '[name].js'
  },
  // 新添加的module属性
  module: {
    loaders: [
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'jsx-loader!babel-loader' },
      { test: /\.js$/, exclude:/node_modules/, loader: 'babel-loader'},
      { test: /\.less$/, exclude: /node_modules/, loader: 'style-loader!css-loader!less-loader' },
      {test: /\.(jpg|png)$/, loader: "url?limit=8192"},
      {test: /\.css$/, loader: "style-loader!css-loader"}, // 把多个css压缩到一个css中。
      { test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, loader:'url-loader?limit=5000'} // 限制大小小于5k
    ]
  },
  babel: {
    presets: ["es2015", "react", "stage-2"]
  },
  devServer: {
    proxy: {
      // 凡是 `/api` 开头的 http 请求，都会被代理到 localhost:3000 上，由 koa 提供 mock 数据。
      // koa 代码在 ./mock 目录中，启动命令为 npm run mock
      '/api': {
        target: 'http://localhost:3000',
        secure: false
      }
    },
    inline: true 
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new ExtractTextPlugin("[name].css"),
    new webpack.HotModuleReplacementPlugin()
  ]
};