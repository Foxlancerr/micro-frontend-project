const htmlWebpackPlugin = require("html-webpack-plugin");
const moduleFedrainPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new moduleFedrainPlugin({
      name: "product",
      filename: "remoteEntry.js",
      exposes: {
        "./productIndex": "./src/index.js",
      },
    }),
  ],
};
