const coreConfig = require('./core/index.cjs');
const tsConfig = require('./typescript/index.cjs');

/** @type {import('eslint').Linter.FlatConfig[]} */
const eslintConfig = [...coreConfig, ...tsConfig];

module.exports = eslintConfig;
