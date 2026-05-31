import pluginVitest from '@vitest/eslint-plugin';
import { defineConfig } from 'eslint/config';

const vitestConfig = defineConfig([
  {
    name: 'harris/vitest',
    files: ['**/*.{test,spec}.{js,mjs,cjs,jsx,ts,mts,cts,tsx}'],
    plugins: { vitest: pluginVitest },
    languageOptions: {
      globals: pluginVitest.environments.env.globals,
    },
    rules: {
      ...pluginVitest.configs.recommended.rules,
      'no-restricted-syntax': [
        'error',
        {
          selector: "CallExpression[callee.object.name='vi'][callee.property.name='clearAllMocks']",
          message: '`clearMocks` has been enabled for tests, so is already being called automatically by Vitest`',
        },
      ],
      // vitest-plugin custom rules outside of all preset
      // See for details: https://alteryx.atlassian.net/wiki/spaces/~133962960/pages/1309638731/eslint-plugin-jest
      'vitest/consistent-test-it': [
        'error',
        {
          // enforce `.it()` over `.test()`
          fn: 'it',
        },
      ],
      'vitest/max-nested-describe': [
        'warn',
        {
          max: 3,
        },
      ],
      // it is common to `.skip()` a test with intention to come back to fix as Tech-Debt
      'vitest/no-disabled-tests': 'error',
      'vitest/no-duplicate-hooks': 'warn',
      'vitest/no-large-snapshots': 'error',
      'vitest/no-test-return-statement': 'warn',
      'vitest/prefer-comparison-matcher': 'error',
      'vitest/prefer-equality-matcher': 'error',
      'vitest/prefer-expect-resolves': 'warn',
      'vitest/prefer-hooks-on-top': 'error',
      'vitest/prefer-spy-on': 'warn',
      'vitest/prefer-todo': 'error',
      'vitest/require-top-level-describe': 'error',
    },
  },
]);

export default vitestConfig;
