const preferArrowPlugin = require('eslint-plugin-prefer-arrow');

/** @type {import('eslint').Linter.FlatConfig} */
const preferArrowConfig = {
  name: 'harris/preferArrow',
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
