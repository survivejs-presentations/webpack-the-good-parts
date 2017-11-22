const isVendor = ({ resource }) => /node_modules/.test(resource);

module.exports = {
  /* ... */
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: isVendor,
    }),
  ],
};
