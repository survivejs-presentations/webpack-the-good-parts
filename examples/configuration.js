const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    // 1. Where to begin
    app: "./app",
  },
  output: {
    // 2. Where to write
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
  },
  // 3. How to process modules
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  // 4. Additional processing to perform
  plugins: [new webpack.DefinePlugin()],
  // 5. How to resolve modules and loaders
  resolve: {
    /* ... */
  },
  resolveLoader: {
    /* ... */
  },
};
