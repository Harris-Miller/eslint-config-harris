import { defineConfig } from 'eslint/config';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

const prettierConfig = defineConfig({
  ...eslintPluginPrettierRecommended,
  name: 'harris/prettier',
  rules: {
    ...eslintPluginPrettierRecommended.rules,
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
