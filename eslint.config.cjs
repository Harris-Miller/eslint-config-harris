const globals = require('globals');

const baseConfig = require('./core/index.cjs');

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
  ...baseConfig,
  {
    name: 'repo/node',
    files: ['*.cjs'],
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    name: 'repo/overrides',
    rules: {
      'sort-keys-fix/sort-keys-fix': 'off',
    },
  },
];
