module.exports = {
  env: {
    browser: false,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "always",
        mjs: "always",
        jsx: "always",
      },
    ],
    "no-console": "off",
    "no-underscore-dangle": ["error", { allow: ["_id"] }],
    "no-continue": ["off"],
    "no-await-in-loop": ["off"],
  },
};
