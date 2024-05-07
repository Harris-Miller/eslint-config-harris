const globals = require('globals');

const baseConfig = require('./core/index.cjs');

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
  ...baseConfig,
  {
    files: ['*.cjs'],
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    rules: {
      'sort-keys-fix/sort-keys-fix': 'off',
    },
  },
];
