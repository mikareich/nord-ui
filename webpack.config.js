const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["./utils/index.js", "./components/index.js"],
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "./dist/"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  plugins: [new HtmlWebpackPlugin()],
};
