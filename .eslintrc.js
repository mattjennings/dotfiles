/**
 * Typescript & React
 * 
 * packages:
    "typescript": "^3.8.3",
    "@typescript-eslint/eslint-plugin": "^2.30.0",
    "@typescript-eslint/parser": "^2.30.0",
    "eslint": "^6.8.0",
    "eslint-config-prettier": "^6.11.0",
    "eslint-plugin-react": "^7.19.0",
    "eslint-plugin-react-hooks": "^4.0.0",
    "prettier": "^2.0.5"
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
