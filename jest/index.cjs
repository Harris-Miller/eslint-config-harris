/** @type {import('eslint').Linter.Config} */
module.exports = {
  name: 'harris/jest',
  plugins: ['jest'],
  overrides: [
    {
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
      files: ['**/*.test.*', '**/*spec.*'],
      rules: {
        'no-restricted-syntax': [
          'error',
          {
            selector: "CallExpression[callee.object.name='jest'][callee.property.name='clearAllMocks']",
            message: '`clearMocks` has been enabled for tests, so is already being called automatically by Jest`',
          },
        ],
        // jest-plugin custom rules outside of recommended/style presets
        // See for details: https://alteryx.atlassian.net/wiki/spaces/~133962960/pages/1309638731/eslint-plugin-jest
        'jest/consistent-test-it': [
          'error',
          {
            // enforce `.it()` over `.test()`
            fn: 'it',
          },
        ],
        'jest/max-nested-describe': [
          'warn',
          {
            max: 3,
          },
        ],
        // it is common to `.skip()` a test with intention to come back to fix as Tech-Debt
        'jest/no-disabled-tests': 'off',
        'jest/no-duplicate-hooks': 'warn',
        'jest/no-large-snapshots': 'error',
        'jest/no-test-return-statement': 'warn',
        'jest/prefer-comparison-matcher': 'error',
        'jest/prefer-equality-matcher': 'error',
        'jest/prefer-expect-resolves': 'warn',
        'jest/prefer-hooks-on-top': 'error',
        'jest/prefer-spy-on': 'warn',
        'jest/prefer-todo': 'error',
        'jest/require-top-level-describe': 'error',
      },
    },
    {
      files: ['**/*.test.ts', '**/*.spec.tsx'],
      rules: {
        // blanket off for test files
        '@typescript-eslint/no-non-null-assertion': 'off',
      },
    },
  ],
};
