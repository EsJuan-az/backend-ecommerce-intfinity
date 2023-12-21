module.exports = {
    "parserOptions": {
      "ecmaVersion": "latest",
    },
    "extends": [
      "eslint:recommended",
      "prettier",
    ],
    "env": {
      "es6": true,
      "node": true,
      "jest": true,
    },
    "rules": {
      "no-console": "warn",
      "semi": ["error", "always"],
      "comma-dangle": [ "error", "always-multiline" ],
    },
};
  