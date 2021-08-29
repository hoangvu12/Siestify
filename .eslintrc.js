module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
  },
  env: {
    browser: true,
    node: true,
  },
  extends: "airbnb-base",
  globals: {
    __static: true,
  },
  plugins: ["html"],
  rules: {
    "global-require": 0,
    "import/no-unresolved": 0,
    "no-param-reassign": 0,
    "no-shadow": 0,
    "import/extensions": 0,
    "import/newline-after-import": 0,
    "no-multi-assign": 0,
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    quotes: [2, "double", { avoidEscape: true }],
    "comma-dangle": ["off"],
    "linebreak-style": 0,
    "vue/no-parsing-error": ["off"],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "function-paren-newline": ["off"],
    "arrow-parens": ["off"],
    "no-console": ["warn"],
    "vue/no-multiple-template-root": ["off"],
  },
};
