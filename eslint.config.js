import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';

import baseConfig from './core/core.js';

const config = defineConfig([
  ...baseConfig,
  globalIgnores(['modules.d.ts']),
  {
    name: 'repo/node',
    languageOptions: {
      globals: globals.nodeBuiltin,
    },
  },
  {
    name: 'repo/overrides',
    rules: {
      'sort-keys-fix/sort-keys-fix': 'off',
    },
  },
]);

export default config;
