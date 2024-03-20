module.exports = {
  root: true,
  env: { browser: true },
  extends: ["eslint:recommended", "prettier"],
  settings: {},
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  plugins: ["import"],
  rules: {
    "import/order": [
      "error",
      {
        alphabetize: { order: "asc" },
      },
    ],
  },
};
