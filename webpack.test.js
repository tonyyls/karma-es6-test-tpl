const path = require("path");

module.exports = {
  entry: {
    main: path.join(__dirname, "src/main.js")
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name]-[hash:8].js"
  },
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [{ test: /\.js$/, use: "babel-loader" }]
  }
};
