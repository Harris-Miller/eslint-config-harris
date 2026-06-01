import { defineConfig } from 'eslint/config';
import pluginUnicorn from 'eslint-plugin-unicorn';

const vitestConfig = defineConfig([
  {
    name: 'harris/unicorn',
    files: ['**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}'],
    plugins: { unicorn: pluginUnicorn },
    rules: {
      // absolute don't use recommended, it's terrible
      ...pluginUnicorn.configs.unopinionated.rules,
      // this just makes frontend code differ between using `globalThis` and `window`
      'unicorn/prefer-global-this': 'off',
      // this rule isn't terrible. `.forEach()` I use rarely anyhow, and for..of better shows intent with side-effects versus transformations
      'unicorn/no-array-for-each': 'off',
      // this rule makes your code less explicit
      'unicorn/no-useless-undefined': 'off',
      // there are times where negated conditions are more readable
      'unicorn/no-negated-condition': 'off',
    },
  },
]);

export default vitestConfig;
