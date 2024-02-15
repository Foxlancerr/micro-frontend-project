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
