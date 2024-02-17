const HtmlWebpackPlugin = require("html-webpack-plugin");
const moduleFederationPlugins = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8082,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new moduleFederationPlugins({
      name: "card",
      filename: "remoteEntry.js",
      exposes: {
        "./cardIndex": "./src/index.js",
      },
    }),
  ],
};
