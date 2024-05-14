const tsEslintPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const tsSortKeysPlugin = require('eslint-plugin-typescript-sort-keys');

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
  {
    name: 'harris/typescript',
    files: ['**/*.ts', '**/*.mts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          // TODO: do I want this on here always?
          jsx: true,
        },
        // always lint with `latest`, tsc will error on new syntax beyond target
        ecmaVersion: 'latest',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/parser/README.md#configuration
        project: './tsconfig.json',
        warnOnUnsupportedTypeScriptVersion: false,
      },
    },
    settings: {
      'import/external-module-folders': ['node_modules', 'node_modules/@types'],
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.cts', '.mts', '.tsx'],
      },
    },
    plugins: {
      '@typescript-eslint': tsEslintPlugin,
      'typescript-sort-keys': tsSortKeysPlugin,
    },
    rules: {
      // specifically turn this off for typescript, extensions are unwanted there. compiler adds in correct js extension
      'import/extensions': 'off',
      ...tsEslintPlugin.configs['recommended-type-checked'].rules,
      ...tsEslintPlugin.configs['stylistic-type-checked'].rules,
      ...tsEslintPlugin.configs['strict-type-checked'].rules,
      '@typescript-eslint/ban-ts-comment': 'off',
      'consistent-return': 'off',
      '@typescript-eslint/consistent-return': 'error',
      // be able to use types or interfaces
      '@typescript-eslint/consistent-type-definitions': 'off',
      // not needed for --isolatedModules, typescript itself throws the same error
      '@typescript-eslint/consistent-type-exports': 'off',
      '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }],
      'default-param-last': 'off',
      '@typescript-eslint/default-param-last': 'error',
      // @typescript-eslint/explicit-module-boundary-types is better
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-member-accessibility': 'off',
      // this is generally useful, but strict, not appropriate for all projects, turn off as needed
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      'init-declarations': 'off',
      '@typescript-eslint/init-declarations': ['error', 'always'],
      '@typescript-eslint/max-params': 'off',
      '@typescript-eslint/member-ordering': 'off',
      '@typescript-eslint/method-signature-style': 'off',
      '@typescript-eslint/naming-convention': [
        'warn',
        {
          // variables, PascalCase is here for React Function Components, as arrow function fall under variable
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        },
        {
          selector: 'function',
          format: ['camelCase', 'PascalCase'],
        },
        {
          selector: 'class',
          format: ['PascalCase'],
        },
        {
          selector: 'interface',
          format: ['PascalCase'],
        },
        {
          selector: 'typeAlias',
          format: ['PascalCase'],
        },
        {
          selector: 'typeParameter',
          format: ['PascalCase'],
        },
      ],
      'no-dupe-class-members': 'off',
      '@typescript-eslint/no-dupe-class-members': 'error',
      // too strict, even from prod ??
      '@typescript-eslint/no-floating-promises': 'off',
      // not needed when tsc isn't used to compile
      '@typescript-eslint/no-import-type-side-effects': 'off',
      'no-invalid-this': 'error',
      '@typescript-eslint/no-invalid-this': 'error',
      'no-loop-func': 'off',
      '@typescript-eslint/no-loop-func': 'error',
      // great idea, but far too strict
      '@typescript-eslint/no-magic-numbers': 'off',
      'no-redeclare': 'off',
      '@typescript-eslint/no-redeclare': 'error',
      '@typescript-eslint/no-require-imports': 'error',
      // nothing I currently want to restrict, but having it on and empty is good for future changes
      '@typescript-eslint/no-restricted-imports': ['error', { paths: [] }],
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-unnecessary-qualifier': 'error',
      '@typescript-eslint/no-unsafe-unary-minus': 'error',
      'no-unused-expressions': 'error',
      '@typescript-eslint/no-unused-expressions': 'error',
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': 'error',
      // onyx has it like this, need to test if actually needed this way
      // '@typescript-eslint/no-use-before-define': [
      //   'warn',
      //   {
      //     functions: false,
      //     classes: true,
      //     variables: true,
      //     typedefs: true,
      //   },
      // ],
      '@typescript-eslint/no-useless-empty-export': 'error',
      '@typescript-eslint/parameter-properties': 'off',
      'prefer-destructuring': 'off',
      '@typescript-eslint/prefer-destructuring': 'error',
      '@typescript-eslint/prefer-enum-initializers': 'off',
      '@typescript-eslint/prefer-find': 'error',
      '@typescript-eslint/prefer-readonly': 'off',
      // far too strict
      '@typescript-eslint/prefer-readonly-parameter-types': 'off',
      // situational, ok off
      '@typescript-eslint/prefer-regexp-exec': 'off',
      // this rule will directly conflict with `disallow async when no await`
      '@typescript-eslint/promise-function-async': 'off',
      // no, sometimes you want to direct sort, stupid to force
      '@typescript-eslint/require-array-sort-compare': 'off',
      '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }],
      // core rule deprecated
      '@typescript-eslint/return-await': 'off',
      '@typescript-eslint/sort-type-constituents': 'error',
      // might be too strict, but useful for enforcing `isNil` and `isNotNil`
      '@typescript-eslint/strict-boolean-expressions': 'error',
      // good rule, but might conflict with `switch(true)`. Need to test more
      '@typescript-eslint/switch-exhaustiveness-check': 'error',
      // this is probably far too strict, but I'd like to test it
      '@typescript-eslint/typedef': [
        'error',
        {
          arrayDestructuring: false,
          arrowParameter: false,
          memberVariableDeclaration: false,
          objectDestructuring: false,
          parameter: false,
          propertyDeclaration: false,
          variableDeclaration: false,
          variableDeclarationIgnoreFunction: false,
        },
      ],
      // typescript-sort-keys
      'typescript-sort-keys/interface': ['error', 'asc', { caseSensitive: true, natural: false, requiredFirst: false }],
    },
  },
];
