const merge = require("webpack-merge");

const commonConfig = merge([
  /* ... */
]);

const productionConfig = merge([
  /*  ... */
]);

/*  ... */

module.exports = mode => {
  if (mode === "production") {
    return merge(commonConfig, productionConfig, { mode });
  }

  return merge(commonConfig, developmentConfig, { mode });
};
