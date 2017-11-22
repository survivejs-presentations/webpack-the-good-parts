const commonConfig = merge([
  /* ... */
]);

const productionConfig = merge([
  /*  ... */
]);

/*  ... */

module.exports = env => {
  if (env === "production") {
    return merge(commonConfig, productionConfig);
  }

  return merge(commonConfig, developmentConfig);
};
