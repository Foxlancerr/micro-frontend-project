const HtmlWebpackPlugin = require("html-webpack-plugin");
const moduleFedrainPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new moduleFedrainPlugin({
      name: "container",
      remotes: {
        product: "product@http://localhost:8081/remoteEntry.js",
        card: "card@http://localhost:8082/remoteEntry.js",
        header: "header@http://localhost:8083/remoteEntry.js",
      },
    }),
  ],
};
