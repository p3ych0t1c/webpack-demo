const HtmlWebpackPlugin = require("html-webpack-plugin");

class HtmlWebpackTopBannerPlugin {
  constructor(banner) {
    this.banner = `<!-- ${banner} -->\n`;
  }
  apply(compiler) {
    compiler.hooks.compilation.tap(
      "HtmlWebpackTopBannerPlugin",
      (compilation) => {
        HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
          "HtmlWebpackTopBannerPlugin",
          (data, cb) => {
            data.html = this.banner + data.html;
            cb(null, data);
          }
        );
      }
    );
  }
}

module.exports = HtmlWebpackTopBannerPlugin;
