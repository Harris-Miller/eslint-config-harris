/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['airbnb', './base'],
  plugins: ['react-hooks', 'react-redux', 'plugin:react-redux/recommended'],
  rules: {
    'react/jsx-props-no-spreading': ['off'],
    'react/jsx-filename-extension': ['off'], // it's not a good practice
    'react/no-unused-state': 'warn',
    'react/prefer-stateless-function': ['warn', { ignorePureComponents: true }],
    'react/jsx-wrap-multilines': 'off', // caused bugs smt and wrong auto fixing,
    'react/jsx-one-expression-per-line': 'off', // managed by prettier
    'react/jsx-first-prop-new-line': 'off', // managed by prettier
    'react/jsx-indent': 'off', // managed by prettier
    'react/prop-types': [
      'warn',
      {
        ignore: ['children', 'classes'],
        customValidators: [],
        skipUndeclared: false
      }
    ],
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: false }], // disable ignore case. Material-ui uses same name with different cases like InputProps and inputProps
    'react/sort-comp': 'off',
    'react/jsx-sort-props': [
      'error',
      {
        ignoreCase: true
      }
    ],
    'react/jsx-sort-default-props': [
      'warn',
      {
        ignoreCase: true
      }
    ],
    'react/sort-prop-types': [
      'warn',
      {
        ignoreCase: true
      }
    ],
    'react/static-property-placement': ['error', 'static public field'],
    'react/state-in-constructor': ['error', 'never'],
    'react/destructuring-assignment': 'off',
    'react-hooks/rules-of-hooks': 'error',
    // Autofix introduces unexpected behavior at the moment.
    'react-hooks/exhaustive-deps': 'warn',
    // Revisit this unsafe rule. We'd like to warn, but it has no effect at the moment.
    'react/no-unsafe': ['warn', { checkAliases: true }],

    // this was updated in airbnb on 2020/11/06 (nov 6) from "off" to "error"
    // See: https://github.com/airbnb/javascript/blame/master/packages/eslint-config-airbnb/rules/react.js#L528
    // their rule is set to "function-expression, which directly conflicts with our `prefer-arrow/prefer-arrow-functions` rule
    // so I'm updating this to match
    // ui-core update pending, remove here if approved
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    // defaultProps for FC are deprecated by React team. See: https://github.com/facebook/react/pull/16210
    'react/require-default-props': [
      'error',
      {
        forbidDefaultForRequired: true,
        ignoreFunctionalComponents: true
      }
    ]
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'react/prop-types': 'off'
      }
    }
  ]
};
