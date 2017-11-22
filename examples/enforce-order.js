const config = {
  module: {
    rules: [
      {
        // Conditions
        test: /\.js$/,
        enforce: "pre", // "post" too

        // Actions
        use: "eslint-loader",
      },
    ],
  },
};
