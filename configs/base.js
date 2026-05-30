import tsConfig from '../rules/typescript.js';

import vanillaConfig from './vanilla.js';

const eslintConfig = [...vanillaConfig, ...tsConfig];

export default eslintConfig;
