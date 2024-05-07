const baseConfig = require('./base.cjs');
const reactConfig = require('./react/index.cjs');

/** @type {import('eslint').Linter.FlatConfig[]} */
const eslintConfig = [...baseConfig, ...reactConfig];

module.exports = eslintConfig;
