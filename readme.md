# Microfrontend Application

## how to install it, so install the following dependicies

```cmd
npm init -y
npm i webpack@5.59.0 webpack-cli@4.9.1 webpack-dev-server@4.3.1 html-webpack-plugin@5.5.0 faker@5.1.0
npm audit fix --force
```

## Configuration Setting

- create webpack.config.js file inside the root directory and write the following configuration code

```json
const htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode: "development",
  devServer: {
    // port which the app is running
      port: 8081,
  },
  plugins: [
    // this will point our index.html file
    new htmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

```

- and also add this code inside the pakage.json file

```json

  "scripts": {
    "start": "webpack serve"
  },

```

# how i add a specific microapp into container

```js
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
```

# how i able to my child to share its contents

```js
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
        "./productIndex": "./src/index",
      },
    }),
  ],
};
```
