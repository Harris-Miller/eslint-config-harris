import tsEslintPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import { defineConfig } from 'eslint/config';

const typescriptConfig = defineConfig([
  {
    name: 'harris/typescript',
    files: ['**/*.{ts,mts,cts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          // TODO: do I want this on here always?
          jsx: true,
        },
        // always lint with `latest`, tsc will error on new syntax beyond target
        ecmaVersion: 'latest',
        project: true,
        warnOnUnsupportedTypeScriptVersion: false,
      },
    },
    plugins: {
      // @ts-expect-error
      '@typescript-eslint': tsEslintPlugin,
      // 'typescript-sort-keys': tsSortKeysPlugin,
    },
    rules: {
      // specifically turn this off for typescript, extensions are unwanted there. compiler adds in correct js extension
      'import-x/extensions': 'off',
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
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'separate-type-imports', disallowTypeAnnotations: false },
      ],
      'default-param-last': 'off',
      '@typescript-eslint/default-param-last': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-member-accessibility': 'off',
      // I tried having this on by default before, it's too strict and doesn't work well with exporting types from libs that are highly dynamic
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'init-declarations': 'off',
      '@typescript-eslint/init-declarations': ['off', 'always'],
      '@typescript-eslint/max-params': 'off',
      '@typescript-eslint/member-ordering': 'off',
      '@typescript-eslint/method-signature-style': 'off',
      '@typescript-eslint/naming-convention': [
        'warn',
        {
          // variables, PascalCase is here for React Function Components, as arrow function fall under variable
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          leadingUnderscore: 'allowSingleOrDouble',
        },
        {
          selector: 'function',
          format: ['camelCase', 'PascalCase'],
          leadingUnderscore: 'allowSingleOrDouble',
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
      '@typescript-eslint/no-import-type-side-effects': 'error',
      'no-invalid-this': 'error',
      '@typescript-eslint/no-invalid-this': 'error',
      'no-loop-func': 'off',
      '@typescript-eslint/no-loop-func': 'error',
      // great idea, but far too strict
      '@typescript-eslint/no-magic-numbers': 'off',
      '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
      // if I do use non-null-assertion, it's very intentional, so I'm not going to bother to enforce it
      '@typescript-eslint/no-non-null-assertion': 'off',
      'no-redeclare': 'off',
      '@typescript-eslint/no-redeclare': 'off', // typescript compiler handles this directly, not needed for .ts files
      '@typescript-eslint/no-require-imports': 'error',
      // nothing I currently want to restrict, but having it on and empty is good for future changes
      '@typescript-eslint/no-restricted-imports': ['error', { paths: [] }],
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-unnecessary-condition': ['error', { allowConstantLoopConditions: true }],
      '@typescript-eslint/no-unnecessary-qualifier': 'error',
      '@typescript-eslint/no-unsafe-unary-minus': 'error',
      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
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
      // for as little as I do traditional for-loops, I want no restrictions on them
      '@typescript-eslint/prefer-for-of': 'off',
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
      // core rule deprecated and I have it 'off' in previous major
      // but typescript-eslint has better reasoning for it with type information, so going to test with it on
      '@typescript-eslint/return-await': ['error', 'always' /* alternative: 'in-try-catch' */],
      // might be too strict, but useful for enforcing `isNil` and `isNotNil`
      '@typescript-eslint/strict-boolean-expressions': 'error',
      // this conflicts with switch-exhaustiveness-check rule below
      'default-case': 'off',
      // good rule, but might conflict with `switch(true)`. Need to test more
      '@typescript-eslint/switch-exhaustiveness-check': ['error', { requireDefaultForNonUnion: true }],
    },
  },
]);

export default typescriptConfig;
