const HtmlWebpackPlugin = require("html-webpack-plugin");
const moduleFedrainPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8082,
  },
  plugins: [
    new moduleFedrainPlugin({
      name: "container",
      remotes: {
        product: "product@http://localhost:8081/remoteEntry.js",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
