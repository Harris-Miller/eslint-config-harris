const preferArrowPlugin = require('eslint-plugin-prefer-arrow');

/** @type {import('eslint').Linter.Config} */
const preferArrowConfig = {
  name: 'harris/preferArrow',
  plugins: {
    'prefer-arrow': preferArrowPlugin,
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
