import { defineConfig } from 'eslint/config';
import eslintPrettier from 'eslint-plugin-prettier/recommended';

import { ALL_FILES } from './rules.constants.js';

const prettierConfig = defineConfig({
  name: 'harris/prettier',
  files: [ALL_FILES],
  plugins: eslintPrettier.plugins,
  rules: {
    // their recommended rules _disables_ the eslint rules that it handles itself
    ...eslintPrettier.rules,
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        printWidth: 120,
        singleQuote: true,
      },
      // original, need to double check
      // {
      //   arrowParens: 'avoid',
      //   bracketSameLine: false,
      //   bracketSpacing: true,
      //   embeddedLanguageFormatting: 'auto',
      //   htmlWhitespaceSensitivity: 'css',
      //   insertPragma: false,
      //   jsxSingleQuote: false,
      //   printWidth: 120,
      //   proseWrap: 'preserve',
      //   quoteProps: 'as-needed',
      //   requirePragma: false,
      //   semi: true,
      //   singleAttributePerLine: false,
      //   singleQuote: true,
      //   tabWidth: 2,
      //   trailingComma: 'all',
      //   useTabs: false,
      //   vueIndentScriptAndStyle: false,
      // },
    ],
  },
});

export default prettierConfig;
