import js from '@eslint/js';
import { defineConfig } from 'eslint/config';

import importConfig from './import.js';
import personalConfig from './personal.js';
import prettierConfig from './prettier.js';
import sortKeysFixConfig from './sortKeys.js';

const coreConfig = defineConfig([
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
      js,
    },
    rules: js.configs.recommended.rules,
  },
  personalConfig,
  prettierConfig,
  importConfig,
  sortKeysFixConfig,
]);

export default coreConfig;
