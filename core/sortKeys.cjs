const sortKeysFixPlugin = require('eslint-plugin-sort-keys-fix');

/** @type {import('eslint').Linter.FlatConfig} */
const sortKeysFixConfig = {
  name: 'harris/sortKeys',
  plugins: {
    'sort-keys-fix': {
      meta: sortKeysFixPlugin.meta,
      rules: sortKeysFixPlugin.rules,
    },
  },
  rules: {
    'sort-keys': 'off',
    'sort-keys-fix/sort-keys-fix': 'error',
  },
};

module.exports = sortKeysFixConfig;
