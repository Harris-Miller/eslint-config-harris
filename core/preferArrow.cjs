const preferArrowPlugin = require('eslint-plugin-prefer-arrow');

/** @type {import('eslint').Linter.FlatConfig} */
const preferArrowConfig = {
  plugins: {
    'prefer-arrow': {
      meta: preferArrowPlugin.meta,
      rules: preferArrowPlugin.rules,
    },
  },
  rules: {
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: false,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
  },
};

module.exports = preferArrowConfig;
