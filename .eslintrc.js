/**
 * Typescript & React
 * 
 * packages:
    "@typescript-eslint/eslint-plugin": "^2.14.0",
    "@typescript-eslint/parser": "^2.14.0",
    "eslint": "^6.8.0",
    "eslint-config-prettier": "^6.9.0",
    "eslint-plugin-react": "^7.17.0",
    "eslint-plugin-react-hooks": "^2.3.0",
    "prettier": "^1.18.2",
    "typescript": "^3.7.4"
 */
module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  plugins: ["react-hooks"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    /* Base */
    "no-var": "error",
    "prefer-const": "warn",
    "no-console": "off",

    /* Typescript */
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/no-var-requires": "off",
      
    /* React */
     "react/prop-types": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true,
  },
}
