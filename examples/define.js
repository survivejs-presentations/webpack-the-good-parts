let foo;

// Not free due to "foo" above, not ok to replace
if (foo === "bar") {
  /*...*/
}

// Free since you don't refer to "bar", ok to replace
if (process.env.NODE_ENV === "development") {
  console.log("bar");
}
