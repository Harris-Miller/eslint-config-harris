import coreConfig from './core/core.js';
import tsConfig from './typescript/typescript.js';

const eslintConfig = [...coreConfig, ...tsConfig];

export default eslintConfig;
