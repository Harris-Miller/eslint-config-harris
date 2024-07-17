const confusingBrowserGlobals = require('confusing-browser-globals');

/*
 * Additional to eslint:recommended, by section
 */

/** @type {import('eslint').Linter.FlatConfig} */
const personalConfig = {
  name: 'harris/personal',
  rules: {
    //
    // problems
    //
    'array-callback-return': ['error', { allowImplicit: true }],
    'no-await-in-loop': 'error',
    'no-constant-binary-expression': 'error',
    'no-constructor-return': 'error',
    // replaced by `import/no-duplicates`
    'no-duplicate-imports': 'off',
    'no-new-native-nonconstructor': 'error',
    'no-promise-executor-return': 'error',
    'no-self-compare': 'error',
    'no-template-curly-in-string': 'error',
    // keep this off to allow `while(arr.length)`
    'no-unmodified-loop-condition': 'off',
    'no-unreachable-loop': 'error',
    'no-unused-private-class-members': 'error',
    // replaced by @typescript-eslint/no-use-before-define
    'no-use-before-define': 'error',
    // may want to keep `allowNamedExports: false`
    // 'no-use-before-define': ['error', { functions: true, classes: true, variables: true, allowNamedExports: false }],
    // eslint-config-airbnb claims this one is buggy, so be on the lookout for issues
    'require-atomic-updates': 'error',

    //
    // suggestions
    //

    // off for `prettier`
    'arrow-body-style': 'off',
    'block-scoped-var': 'error',
    // replaced by `@typescript-eslint/naming-convention`
    camelcase: 'off',
    // airbnb has this set to 20, want to test a bit
    complexity: ['error', 10],
    // replaced by `@typescript-eslint/consistent-return`
    'consistent-return': 'error',
    'consistent-this': 'error',
    curly: ['error', 'multi-line'],
    'default-case': 'error',
    'default-case-last': 'error',
    // replaced by `@typescript-eslint/default-param-last`
    'default-param-last': 'error',
    'dot-notation': 'error',
    // `{ null: 'ignore' }` because `x == null` checks both `null` and `undefined`
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'func-names': 'error',
    'func-style': ['error', 'expression', { allowArrowFunctions: true }],
    'grouped-accessor-pairs': 'error',
    'guard-for-in': 'error',
    // replaced by `@typescript-eslint/init-declarations`
    'init-declarations': ['off', 'always'],
    'logical-assignment-operators': ['error', 'always', { enforceForIfStatements: true }],
    'max-classes-per-file': ['error', 1],
    // airbnb has this off, but i'm going to test it on
    'max-depth': ['error', 4],
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-console': 'warn',
    'no-continue': 'error',
    'no-div-regex': 'off',
    'no-else-return': ['error', { allowElseIf: false }],
    // replaced by @typescript-eslint/no-empty-function
    'no-empty-function': [
      'error',
      {
        allow: ['arrowFunctions'],
      },
    ],
    'no-empty-static-block': 'error',
    // ok because because `x == null` checks both `null` and `undefined`
    'no-eq-null': 'off',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'off',
    'no-implied-eval': 'error',
    // replaced by @typescript-eslint/no-invalid-this
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    // replaced by @typescript-eslint/no-loop-func
    'no-loop-func': 'error',
    'no-multi-assign': 'error',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-object-constructor': 'error',
    'no-octal-escape': 'error',
    // airbnb has some overrides for specific arg and prop names, want to test those a bit first
    // onyx has `props: false`, I don't think I want that given my FP style and immutability
    'no-param-reassign': ['error', { props: true }],
    // airbnb has this as 'error', but want to test this
    'no-plusplus': 'error',
    'no-proto': 'error',
    'no-restricted-exports': [
      'error',
      {
        restrictedNamedExports: [
          // use `export default` to provide a default export
          'default',
          // this will cause tons of confusion when your module is dynamically `import()`ed, and will break in most node ESM versions
          'then',
        ],
      },
    ],
    'no-restricted-globals': [
      'error',
      {
        name: 'isFinite',
        message: 'Use Number.isFinite instead',
      },
      {
        name: 'isNaN',
        message: 'Use Number.isNaN instead',
      },
      {
        name: 'parseInt',
        message: 'Use Number.parseInt instead',
      },
      {
        name: 'parseFloat',
        message: 'Use Number.parseFloat instead',
      },
      // now add all confusingBrowserGlobals, but not `self`, since that's needed for WebWorkers
    ].concat(
      confusingBrowserGlobals
        .filter(g => g !== 'self')
        .map(g => ({
          name: g,
          message: `Use window.${g} instead`,
        })),
    ),
    'no-restricted-properties': [
      'error',
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated',
      },
      {
        object: 'global',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'self',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'window',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'global',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'self',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'window',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.',
      },
    ],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
      {
        selector: 'TSEnumDeclaration',
        message: "Don't declare enums, use union types instead. See README for more details",
      },
    ],
    'no-return-assign': ['error', 'always'],
    'no-script-url': 'error',
    'no-sequences': 'error',
    // replaced by @typescript-eslint/no-shadow
    'no-shadow': 'error',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-underscore-dangle': 'error',
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    // replaced by @typescript-eslint/no-unused-expressions
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    // airbnb has this off, but I think it should be on, testing
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    // replaced by @typescript-eslint/no-useless-constructor
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'object-shorthand': ['error', 'always'],
    'one-var': ['error', 'never'],
    'operator-assignment': ['error', 'always'],
    // off for `prettier`
    'prefer-arrow-callback': 'off',
    'prefer-const': ['error', { ignoreReadBeforeAssign: true }],
    // replaced by @typescript-eslint/prefer-destructuring
    'prefer-destructuring': 'error',
    'prefer-exponentiation-operator': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-object-has-own': 'error',
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    radix: 'error',
    'require-await': 'error',
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: true,
      },
    ],
    // replaced by sort-keys-fix/sort-keys-fix
    'sort-keys': 'error',
    strict: ['error', 'never'],
    'symbol-description': 'error',
    'vars-on-top': 'error',
    yoda: 'error',

    //
    // layout and formatting
    //

    // this is needed for `sort-keys-fix`
    // when a comment is on the same line, sort-keys-fix won't move the comment with the code
    // but if the comment is above, it will be moved
    'line-comment-position': ['error', { position: 'above' }],
    'unicode-bom': ['error', 'never'],
  },
};

module.exports = personalConfig;
