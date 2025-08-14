module.exports = {
  root: true,
  extends: ["@dishio/eslint-config/next.js"],
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    // sourceType: "module",
  },
};
