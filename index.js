module.exports = {
  extends: ['airbnb', require.resolve('./base')],
  plugins: ['react-hooks'],
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
        skipUndeclared: false,
      },
    ],
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: false }], // disable ignore case. Material-ui uses same name with different cases like InputProps and inputProps
    'react/sort-comp': 'off',
    'react/jsx-sort-props': [
      'error',
      {
        ignoreCase: true,
      },
    ],
    'react/jsx-sort-default-props': [
      'warn',
      {
        ignoreCase: true,
      },
    ],
    'react/sort-prop-types': [
      'warn',
      {
        ignoreCase: true,
      },
    ],
    'react/static-property-placement': ['error', 'static public field'],
    'react/destructuring-assignment': 'off',
    'react/no-unsafe': ['warn', { checkAliases: true }],
    // the below rules are being evaluated and will either be turned off or allowed through
    'react/state-in-constructor': ['error', 'never'],
  },
};
