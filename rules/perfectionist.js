import { defineConfig } from 'eslint/config';
import perfectionist from 'eslint-plugin-perfectionist';

import { ALL_FILES } from './rules.constants.js';

const perfectionistConfig = defineConfig([
  {
    name: 'harris/perfectionist',
    files: [ALL_FILES],
    plugins: {
      perfectionist,
    },
    rules: {
      ...perfectionist.configs['recommended-alphabetical'].rules,
      // TODO: test this out and see how I feel about it
      //...perfectionist.configs['recommended-natural'].rules,
      // this one is already handled by `eslint-plugin-import-x`
      'perfectionist/sort-imports': 'off',
      // this one alphabetizes root level types/variables in a module. absolutely not wanted
      'perfectionist/sort-modules': 'off',
    },
  },
]);

export default perfectionistConfig;
