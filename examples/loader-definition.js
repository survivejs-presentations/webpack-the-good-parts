const config = {
  module: {
    rules: [
      {
        // **Conditions**
        test: /\.js$/, // Match files

        // **Restrictions**
        include: path.join(__dirname, "app"),
        exclude: path => path.match(/node_modules/),

        // **Actions**
        use: "babel-loader",
      },
    ],
  },
};
