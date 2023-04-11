const { merge } = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackTopBannerPlugin = require("./html-webpack-top-banner-plugin");

const prodWebpackConfig = merge(baseWebpackConfig, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackTopBannerPlugin(`Build Time: ${new Date()}`),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
});

module.exports = prodWebpackConfig;
