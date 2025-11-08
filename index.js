import baseConfig from './base.js';
import reactConfig from './react/react.js';

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [...baseConfig, ...reactConfig];

export default eslintConfig;
