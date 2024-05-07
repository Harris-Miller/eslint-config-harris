const importPlugin = require('eslint-plugin-import');

/** @type {import('eslint').Linter.FlatConfig} */
const importConfig = {
  plugins: {
    import: importPlugin,
  },
  // these are all from airbnb, going to turn them on as I find I need them
  settings: {
    'import/extensions': ['.ts', '.cts', '.mts', '.tsx', '.js', '.jsx'],
    'import/resolver': {
      // the typescript resolve is the best for all
      typescript: true,
      node: true,
    },
  },
  rules: {
    // Helpful warnings
    'import/export': 'error',
    'import/no-empty-named-blocks': 'error',
    'import/no-extraneous-dependencies': 'off',
    'import/no-mutable-exports': 'error',
    // buggy
    'import/no-named-as-default': 'off',
    // buggy
    'import/no-named-as-default-member': 'off',
    // need to test if this support CJS
    'import/no-unused-modules': 'error',

    // Module systems
    'import/no-amd': 'error',
    'import/no-commonjs': 'off',
    'import/no-import-module-exports': 'error',
    'import/no-nodejs-modules': 'off',
    // need to test
    'import/unambiguous': 'error',

    // Static analysis
    // doesn't play well with tsc#esModuleInterop
    'import/default': 'off',
    'import/named': 'error',
    // this one
    'import/namespace': 'off',
    'import/no-absolute-path': 'error',
    'import/no-cycle': ['error', { maxDepth: '∞' }],
    'import/no-dynamic-require': 'error',
    'import/no-internal-modules': 'off',
    'import/no-relative-packages': 'error',
    'import/no-relative-parent-imports': 'off',
    'import/no-restricted-paths': 'off',
    'import/no-self-import': 'error',
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
    'import/no-useless-path-segments': ['error', { commonjs: true }],
    'import/no-webpack-loader-syntax': 'error',

    // Style guide
    'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
    'import/dynamic-import-chunkname': 'off',
    'import/exports-last': 'off',
    'import/extensions': ['error', { ignorePackages: true }],
    'import/first': 'error',
    'import/group-exports': 'off',
    'import/max-dependencies': 'off',
    'import/newline-after-import': 'error',
    'import/no-anonymous-default-export': 'error',
    // trying this on, as it's how I prefer it
    'import/no-default-export': 'error',
    'import/no-duplicates': 'error',
    'import/no-named-default': 'error',
    'import/no-named-export': 'off',
    'import/no-namespace': 'off',
    'import/no-unassigned-import': 'off',
    'import/order': [
      'error',
      {
        groups: ['external', 'builtin', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'import/prefer-default-export': 'off',
  },
};

module.exports = importConfig;
