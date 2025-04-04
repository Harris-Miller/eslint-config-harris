const sortKeysFixPlugin = require('eslint-plugin-sort-keys-fix');

/** @type {import('eslint').Linter.Config} */
const sortKeysFixConfig = {
  name: 'harris/sortKeys',
  plugins: {
    'sort-keys-fix': sortKeysFixPlugin,
  },
  rules: {
    'sort-keys': 'off',
    'sort-keys-fix/sort-keys-fix': 'error',
  },
};

module.exports = sortKeysFixConfig;
