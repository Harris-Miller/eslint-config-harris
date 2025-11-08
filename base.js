import coreConfig from './core/core.js';
import tsConfig from './typescript/typescript.js';

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [...coreConfig, ...tsConfig];

export default eslintConfig;
