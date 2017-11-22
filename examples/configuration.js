module.exports = {
  entry: {
    // 1. Where to begin
    app: path.join(__dirname, "app"),
  },
  output: {
    // 2. Where to write
    path: path.join(__dirname, "build"),
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
  plugins: [new UglifyJsPlugin()],
  // 5. How to resolve modules and loaders
  resolve: {
    /* ... */
  },
  resolveLoader: {
    /* ... */
  },
};
