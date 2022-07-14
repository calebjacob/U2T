module.exports = {
  root: true,

  parser: "@typescript-eslint/parser",

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    jsx: true,
  },

  extends: [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/jest",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
  ],

  ignorePatterns: ["dist", "build", "node_modules"],
};
