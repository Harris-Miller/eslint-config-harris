import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';

import baseConfig from './configs/vanilla.js';

const config = defineConfig([
  ...baseConfig,
  globalIgnores(['modules.d.ts']),
  {
    languageOptions: {
      globals: globals.nodeBuiltin,
    },
    name: 'repo/node',
  },
  {
    name: 'repo/overrides',
    rules: {
      'perfectionist/sort-objects': 'off',
    },
  },
]);

export default config;
