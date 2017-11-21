module.exports = {
  ...
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: isVendor,
    }),
  ]
};

function isVendor({ resource }) {
  return resource && resource.indexOf('node_modules') >= 0 &&
    resource.match(/\\.js$/);
}