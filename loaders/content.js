
const fs = require("fs");

module.exports = function () {
  this.cacheable();
  const callback = this.async();

  fs.readFile(this.resource, "utf-8", callback);
};
