import { defineConfig } from 'eslint/config';
import sortKeysFixPlugin from 'eslint-plugin-sort-keys-fix';

const sortKeysFixConfig = defineConfig({
  name: 'harris/sortKeys',
  plugins: {
    'sort-keys-fix': sortKeysFixPlugin,
  },
  rules: {
    'sort-keys': 'off',
    'sort-keys-fix/sort-keys-fix': 'error',
  },
});

export default sortKeysFixConfig;
