const eslint = require('@eslint/js');
const onlyWarnPlugin = require('eslint-plugin-only-warn');

const importConfig = require('./import.cjs');
const personalConfig = require('./personal.cjs');
const preferArrowConfig = require('./preferArrow.cjs');
const prettierConfig = require('./prettier.cjs');
const sortKeysFixConfig = require('./sortKeys.cjs');

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
  {
    name: 'harris/core',
    // apply to ALL, typescript specific rules will apply only to those extensions, etc
    files: ['**/*.js', '**/*.cjs', '**/*.mjs', '**/*.jsx', '**/*.ts', '**/*.mts', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 'latest',
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    plugins: {
      'only-warn': onlyWarnPlugin,
    },
  },
  {
    name: 'eslint/recommended',
    ...eslint.configs.recommended,
  },
  personalConfig,
  prettierConfig,
  importConfig,
  sortKeysFixConfig,
  preferArrowConfig,
];
