const js = require('@eslint/js');
const onlyWarnPlugin = require('eslint-plugin-only-warn');

const importConfig = require('./import.cjs');
const personalConfig = require('./personal.cjs');
const preferArrowConfig = require('./preferArrow.cjs');
const prettierConfig = require('./prettier.cjs');
const sortKeysFixConfig = require('./sortKeys.cjs');

/** @type {import('eslint').Linter.Config[]} */
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
      js,
    },
    rules: js.configs.recommended.rules,
  },
  personalConfig,
  prettierConfig,
  importConfig,
  sortKeysFixConfig,
  preferArrowConfig,
];
