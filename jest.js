/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: ['jest'],
  overrides: [
    {
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
      files: ['**/*.test.*', '**/*spec.*'],
      rules: {
        // jest-plugin custom rules outside of recommended/style presets
        // See for details: https://alteryx.atlassian.net/wiki/spaces/~133962960/pages/1309638731/eslint-plugin-jest
        'jest/consistent-test-it': [
          'error',
          {
            fn: 'it' // enforce `.it()` over `.test()`
          }
        ],
        'jest/max-nested-describe': [
          'warn',
          {
            max: 3
          }
        ],
        'jest/no-disabled-tests': 'off', // it is common to `.skip()` a test with intention to come back to fix as Tech-Debt
        'jest/no-duplicate-hooks': 'warn',
        'jest/no-large-snapshots': 'error',
        'jest/no-test-return-statement': 'warn',
        'jest/prefer-comparison-matcher': 'error',
        'jest/prefer-equality-matcher': 'error',
        'jest/prefer-expect-resolves': 'warn',
        'jest/prefer-hooks-on-top': 'error',
        'jest/prefer-spy-on': 'warn',
        'jest/prefer-todo': 'error',
        'jest/require-top-level-describe': 'error'
      }
    }
  ]
};
