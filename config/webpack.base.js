const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: path.join(__dirname, "../src/index.js"),
    other: path.join(__dirname, "../src/other.js"),
  },
  output: {
    filename: "[name].[contenthash:8].js",
    path: path.join(__dirname, "../dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../src/index.html"),
      filename: "index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../src/other.html"),
      filename: "other.html",
      // 不指定的话，会都引入entry里的js文件
      chunks: ["other"],
    }),
  ],
};
