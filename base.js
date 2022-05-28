const typescriptEslintRecommended = require('@typescript-eslint/eslint-plugin').configs.recommended;
// eslint-disable-next-line import/no-extraneous-dependencies
const airbnbBaseVariables = require('eslint-config-airbnb-base/rules/variables');
const typescriptImports = require('eslint-plugin-import').configs.typescript;

// `self` is the globalThis in workers, which eslint-config-airbnb-base has as a no-restricted-globals
// even when setting `eslint-env worker`, referencing `self` still throws an error because of this
// so we need to grab it's rule here and remove it from it's list
const noRestrictedGlobals = airbnbBaseVariables.rules['no-restricted-globals'].filter(g => g !== 'self');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: ['prettier', 'no-only-tests', 'lodash', 'prefer-arrow', 'sort-keys-fix', 'typescript-sort-keys'],
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    sourceType: 'module',
    ecmaVersion: 11,
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    // override airbnb's 'no-restricted-globals' for the reasons explained at the top of the file
    'no-restricted-globals': noRestrictedGlobals,
    'arrow-body-style': ['error', 'as-needed', { requireReturnForObjectLiteral: false }],
    'operator-linebreak': ['error', 'after', { overrides: { '?': 'ignore', ':': 'ignore' } }],
    'comma-dangle': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'object-curly-newline': ['error', { consistent: true }],
    'linebreak-style': 'off',
    'no-mixed-spaces-and-tabs': ['error'],
    'no-param-reassign': ['error', { props: false }],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true
      }
    ],
    'no-prototype-builtins': 'off',
    'function-paren-newline': 'off', // conflict with prettier
    'implicit-arrow-linebreak': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 120,
        arrowParens: 'avoid',
        trailingComma: 'none',
        endOfLine: 'auto'
      }
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/prefer-default-export': 'off',
    'import/no-named-as-default': 'off',
    'lodash/import-scope': ['error', 'method'],
    complexity: ['error', 20],
    'handle-callback-err': 'error',
    'class-methods-use-this': 'off',
    'import/order': [
      'error',
      {
        groups: ['external', 'builtin', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true }
      }
    ],
    'max-classes-per-file': ['error', 1],
    'no-only-tests/no-only-tests': 'error',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.'
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
      },
      {
        selector: 'TSEnumDeclaration',
        message: "Don't declare enums, use object literals with `as const` instead"
      }
    ],
    'no-plusplus': 'off',
    'no-loss-of-precision': 'warn',
    'no-nonoctal-decimal-escape': 'warn',
    'no-unsafe-optional-chaining': 'warn',
    'no-useless-backreference': 'warn',
    'default-case-last': 'warn',
    'default-param-last': 'warn',
    'grouped-accessor-pairs': 'warn',
    'no-constructor-return': 'warn',
    'prefer-regex-literals': [
      'warn',
      {
        disallowRedundantWrapping: true
      }
    ],
    'no-dupe-else-if': 'warn',
    'no-import-assign': 'warn',
    'no-promise-executor-return': 'warn',
    'no-setter-return': 'warn',
    'no-unreachable-loop': 'warn',
    // this was updated in airbnb on 2020/11/06 (nov 6) from "off" to "error"
    // they have "default" in this list too, which prevents `export { default } from './file';`, which we have a LOT of
    // ui-core update pending, remove here if approved
    'no-restricted-exports': [
      'error',
      {
        restrictedNamedExports: [
          'then' // this will cause tons of confusion when your module is dynamically `import()`ed, and will break in most node ESM versions
        ]
      }
    ],
    'import/no-import-module-exports': [
      'warn',
      {
        exceptions: []
      }
    ],
    'import/no-relative-packages': 'warn',
    'function-call-argument-newline': ['warn', 'consistent'],
    'prefer-exponentiation-operator': 'warn',
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: true
      }
    ],
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: false,
        singleReturnOnly: false,
        classPropertiesAllowed: false
      }
    ],
    // eslint-plugin-sort-keys-fix needs the base rule turned off so we can use it's replacement rule
    'sort-keys': 'off',
    'sort-keys-fix/sort-keys-fix': 'warn'
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/parser/README.md#configuration
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        },
        warnOnUnsupportedTypeScriptVersion: true
      },
      plugins: ['@typescript-eslint'],
      ...typescriptImports,
      rules: {
        ...typescriptEslintRecommended.rules,
        'no-empty-function': 'off',
        'no-undef': 'off',
        // these are to help with our variable naming conventions
        '@typescript-eslint/naming-convention': [
          'warn',
          {
            // variables, PascalCase is here for React Function Components, as arrow function fall under variable
            selector: 'variable',
            format: ['camelCase', 'UPPER_CASE', 'PascalCase']
          },
          {
            selector: 'function',
            format: ['camelCase', 'PascalCase']
          },
          {
            selector: 'class',
            format: ['PascalCase']
          }
        ],
        '@typescript-eslint/ban-types': [
          'error',
          {
            types: {
              String: {
                message: 'Avoid using the `String` type. Did you mean `string`?',
                fixWith: 'string'
              },
              Object: {
                message: 'Avoid using the `Object` type. Did you mean `object`?'
              },
              Boolean: {
                message: 'Avoid using the `Boolean` type. Did you mean `boolean`?'
              },
              Number: {
                message: 'Avoid using the `Number` type. Did you mean `number`?'
              },
              Symbol: {
                message: 'Avoid using the `Symbol` type. Did you mean `symbol`?'
              }
            },
            extendDefaults: false
          }
        ],
        'no-useless-constructor': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/member-ordering': 'off',
        '@typescript-eslint/no-explicit-any': 'off', // consider extending on a per project basis
        '@typescript-eslint/no-extraneous-class': 'error',
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-this-alias': ['error', { allowDestructuring: true }],
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-type-alias': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [
          'warn',
          {
            functions: false,
            classes: true,
            variables: true,
            typedefs: true
          }
        ],
        '@typescript-eslint/no-object-literal-type-assertion': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/restrict-plus-operands': 'error',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            vars: 'all',
            args: 'after-used',
            argsIgnorePattern: '^_',
            ignoreRestSiblings: true
          }
        ],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/prefer-ts-expect-error': 'warn',
        '@typescript-eslint/no-empty-function': 'warn',
        // the below rules are being evaluated and will either be turned off or allowed through

        // due to an update with eslint-plugin-import, we need this rule now for typescript
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never'
          }
        ],

        // Added as part of @typescript-eslint monorepo v5 upgrade to account for incoming new error-level recommended rule.
        'no-loss-of-precision': 'off',
        '@typescript-eslint/no-loss-of-precision': ['warn'],

        // Added as part of @typescript-eslint monorepo v5 upgrade to account for incoming new error-level recommended rule.
        '@typescript-eslint/no-unnecessary-type-constraint': 'warn',

        // Added as part of @typescript-eslint monorepo v5 upgrade to account for incoming new error-level recommended rule.
        '@typescript-eslint/no-unsafe-argument': 'warn',

        // typescript version of default-param-last
        'default-param-last': 'off',
        '@typescript-eslint/default-param-last': 'warn',

        // the rule is called interface, but it works for types as well
        'typescript-sort-keys/interface': 'warn'
      }
    }
  ]
};
