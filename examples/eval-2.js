const config = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader"],
      },
      {
        test: /\.css$/,
        use: ["css-loader"],
      },
    ],
  },
};
