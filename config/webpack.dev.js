const { merge } = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.js");
const devWebpackConfig = merge(baseWebpackConfig, {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
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
  devServer: {
    hot: true,
  },
});

module.exports = devWebpackConfig;
