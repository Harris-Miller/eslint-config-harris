const typescriptEslintRecommended = require('@typescript-eslint/eslint-plugin').configs.recommended;
const typescriptImports = require('eslint-plugin-import').configs.typescript;

const noRestrictedImportsBaseConfig = {
  paths: [
    {
      name: 'lodash',
      message:
        "Please import only needed functions (e.g. import helper from 'lodash/helper') instead to minimize final bundle size."
    },
    {
      name: 'date-fns',
      message:
        "Please import only needed functions (e.g. import func from 'date-fns/func') instead to minimize final bundle size."
    }
  ]
};

const noRestrictedSyntax = [
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
  }
];

module.exports = {
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  plugins: ['prettier', 'prefer-arrow'],
  rules: {
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
    complexity: ['error', 20],
    'handle-callback-err': 'error',
    'class-methods-use-this': 'off',
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
    'import/order': [
      'error',
      {
        groups: ['external', 'builtin', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true }
      }
    ],
    'max-classes-per-file': ['error', 1],
    'no-restricted-syntax': ['error', ...noRestrictedSyntax],
    'no-restricted-imports': ['error', noRestrictedImportsBaseConfig],
    'no-plusplus': 'off',
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: false,
        singleReturnOnly: false,
        classPropertiesAllowed: false
      }
    ]
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 11,
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    },
    requireConfigFile: false
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json', // this works if you have tsconfig.json at the base of your project, but you'll have to override else
        ecmaVersion: 2020,
        sourceType: 'module',
        warnOnUnsupportedTypeScriptVersion: true
      },
      plugins: ['@typescript-eslint'],
      ...typescriptImports,
      rules: Object.assign(typescriptEslintRecommended.rules, {
        'no-empty-function': 'off',
        'no-undef': 'off',
        'no-restricted-imports': [
          'error',
          {
            paths: [
              ...noRestrictedImportsBaseConfig.paths,
              // currently we can't use this path, because it overrides base config path for lodash
              // this import is still disallowed since we restricted imports from root for lodash
              // probably can be uncommented after https://github.com/eslint/eslint/issues/14220
              // {
              //   'name': 'lodash',
              //   'importNames': ['get'],
              //   'message': 'Please use optional chaining instead.'
              // },
              {
                name: 'lodash/get',
                importNames: ['default'],
                message: 'Please use optional chaining instead.'
              }
            ]
          }
        ],
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'interface',
            format: ['PascalCase'],
            prefix: ['I']
          },
          {
            selector: 'typeParameter',
            format: ['PascalCase'],
            custom: {
              regex: '^T([A-Z][a-z]*)*$',
              match: true
            }
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
        '@typescript-eslint/prefer-ts-expect-error': 'warn',
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-empty-function': 'warn',
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
        'no-restricted-syntax': [
          'error',
          ...noRestrictedSyntax,
          {
            selector: 'TSEnumDeclaration',
            message: "Don't declare enums, use object literals with `as const` instead"
          }
        ]
      })
    }
  ]
};
