import eslintConfig from '../rules/eslint.js';
import importConfig from '../rules/import.js';
import perfectionistConfig from '../rules/perfectionist.js';
import prettierConfig from '../rules/prettier.js';

const vanillaConfig = [eslintConfig, perfectionistConfig, prettierConfig, importConfig];

export default vanillaConfig;
