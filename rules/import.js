import { defineConfig } from 'eslint/config';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import { createNodeResolver, importX } from 'eslint-plugin-import-x';

import { ALL_FILES } from './rules.constants.js';

const importConfig = defineConfig({
  name: 'harris/import',
  files: [ALL_FILES],
  plugins: {
    'import-x': importX,
  },
  // these are all from airbnb, going to turn them on as I find I need them
  settings: {
    'import-x/parsers': {
      '@typescript-eslint/parser': ['.ts', '.cts', '.mts', '.tsx'],
    },
    'import-x/extensions': ['.ts', '.cts', '.mts', '.tsx', '.js', '.cjs', '.mjs', '.jsx'],
    'import-x/resolver-next': [
      // try typescript resolver first (works for .js files if there are part of a tsconfig or jsconfig)
      createTypeScriptImportResolver(),
      // then use node resolver as fallback
      createNodeResolver(),
    ],
  },
  rules: {
    // Helpful warnings
    'import-x/export': 'error',
    'import-x/no-empty-named-blocks': 'error',
    'import-x/no-extraneous-dependencies': 'off',
    'import-x/no-mutable-exports': 'error',
    // buggy
    'import-x/no-named-as-default': 'off',
    // buggy
    'import-x/no-named-as-default-member': 'off',
    // need to test if this support CJS
    'import-x/no-unused-modules': 'error',
    // new, testing
    // 'import-x/no-rename-default': 'error',

    // Module systems
    'import-x/no-amd': 'error',
    'import-x/no-commonjs': 'off',
    'import-x/no-import-module-exports': 'error',
    'import-x/no-nodejs-modules': 'off',
    // need to test
    'import-x/unambiguous': 'error',

    // Static analysis
    // doesn't play well with tsc#esModuleInterop
    'import-x/default': 'off',
    'import-x/named': 'error',
    // this one
    'import-x/namespace': 'off',
    'import-x/no-absolute-path': 'error',
    // this rule is very expensive, better to quality gate via your bundler
    'import-x/no-cycle': 'off',
    'import-x/no-dynamic-require': 'error',
    'import-x/no-internal-modules': 'off',
    'import-x/no-relative-packages': 'error',
    'import-x/no-relative-parent-imports': 'off',
    'import-x/no-restricted-paths': 'off',
    'import-x/no-self-import': 'error',
    'import-x/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
    'import-x/no-useless-path-segments': ['error', { commonjs: true }],
    'import-x/no-webpack-loader-syntax': 'error',

    // Style guide
    'import-x/consistent-type-specifier-style': ['error', 'prefer-top-level'],
    'import-x/dynamic-import-chunkname': 'off',
    'import-x/exports-last': 'off',
    'import-x/extensions': 'off',
    'import-x/first': 'error',
    'import-x/group-exports': 'off',
    'import-x/max-dependencies': 'off',
    'import-x/newline-after-import': 'error',
    'import-x/no-anonymous-default-export': 'error',
    'import-x/no-default-export': 'off',
    'import-x/no-duplicates': 'error',
    'import-x/no-named-default': 'error',
    'import-x/no-named-export': 'off',
    'import-x/no-namespace': 'off',
    'import-x/no-unassigned-import': 'off',
    'import-x/order': [
      'error',
      {
        groups: ['external', 'builtin', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'import-x/prefer-default-export': 'off',
  },
});

export default importConfig;
