'use strict';

module.exports = {
  rules: {
    // enforce spacing inside array brackets
    'array-bracket-spacing': [2, 'never'],
    // disallow or enforce spaces inside of single line blocks
    'block-spacing': [2, 'always'],
    // enforce one true brace style
    'brace-style': [2, '1tbs', { allowSingleLine: true }],
    // require camel case names
    camelcase: [2, { properties: 'never' }], // because of .NET serialization not for properties
    // enforce spacing before and after comma
    'comma-spacing': [2, { before: false, after: true }],
    // enforce one true comma style
    'comma-style': [2, 'last'],
    // disallow padding inside computed properties
    'computed-property-spacing': [2, 'never'],
    // enforces consistent naming when capturing the current execution context
    'consistent-this': [2, 'that'], // TODO: get feedback
    // enforce newline at the end of file, with no multiple empty lines
    'eol-last': 2,
    // require function expressions to have a name
    'func-names': 0,
    // enforces use of function declarations or expressions
    'func-style': 0,
    // this option enforces minimum and maximum identifier lengths
    // (variable names, property names etc.)
    'id-length': 0,
    // require identifiers to match the provided regular expression
    'id-match': 0,
    // this option sets a specific tab width for your code
    indent: [2, 2, { SwitchCase: 1 }],
    // specify whether double or single quotes should be used in JSX attributes
    // http://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': [2, 'prefer-double'],
    // enforces spacing between keys and values in object literal properties
    'key-spacing': [2, { beforeColon: false, afterColon: true }],
    // require a space before & after certain keywords
    'keyword-spacing': [2, {
      before: true,
      after: true,
      overrides: {
        return: { after: true },
        throw: { after: true },
        case: { after: true }
      }
    }],
    // disallow mixed 'LF' and 'CRLF' as linebreaks
    'linebreak-style': 0, // just too confusing and hard to enforce
    // enforces empty lines around comments
    'lines-around-comment': 0,
    'max-depth': [1, 5], // TODO: get feed-back
    // specify the maximum length of a line in your program
    'max-len': [0, 100, 4, {
      ignoreUrls: true,
      ignoreComments: true
    }], // TODO: get feedback
    // specify the maximum depth callbacks can be nested
    'max-nested-callbacks': [2, 5], // TODO: get feed-back
    // require a capital letter for constructors
    'new-cap': [2, { newIsCap: true }],
    // disallow the omission of parentheses when invoking a constructor with no arguments
    'new-parens': 2,
    // allow/disallow an empty newline after var statement
    'newline-after-var': 0,
    // http://eslint.org/docs/rules/newline-before-return
    'newline-before-return': 0,
    // enforce newline after each call when chaining the calls
    'newline-per-chained-call': [0, { ignoreChainWithDepth: 3 }],
    // disallow use of the Array constructor
    'no-array-constructor': 2,
    // disallow use of bitwise operators
    'no-bitwise': 0,
    // disallow use of the continue statement
    'no-continue': 0,
    // disallow comments inline after code
    'no-inline-comments': 0,
    // disallow if as the only statement in an else block
    'no-lonely-if': 0,
    // disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 2,
    // disallow multiple empty lines and only one newline at the end
    'no-multiple-empty-lines': [2, { max: 2, maxEOF: 1 }],
    // disallow negated conditions
    'no-negated-condition': 0,
    // disallow nested ternary expressions
    'no-nested-ternary': 2,
    // disallow use of the Object constructor
    'no-new-object': 2,
    // disallow use of unary operators, ++ and --
    'no-plusplus': 0,
    // disallow space between function identifier and application
    'no-spaced-func': 2,
    // disallow the use of ternary operators
    'no-ternary': 0,
    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 2,
    // disallow dangling underscores in identifiers
    'no-underscore-dangle': 0,
    // disallow the use of Boolean literals in conditional expressions
    // also, prefer `a || b` over `a ? a : b`
    'no-unneeded-ternary': [2, { defaultAssignment: false }],
    // disallow whitespace before properties
    // http://eslint.org/docs/rules/no-whitespace-before-property
    'no-whitespace-before-property': 2,
    // require padding inside curly braces
    'object-curly-spacing': [2, 'always'],
    // allow just one var statement per function
    'one-var': [2, 'never'],
    // require a newline around variable declaration
    'one-var-declaration-per-line': [2, 'always'],
    // require assignment operator shorthand where possible or prohibit it entirely
    'operator-assignment': 0,
    // enforce operators to be placed before or after line breaks
    'operator-linebreak': 0,
    // enforce padding within blocks
    'padded-blocks': 0,
    // require quotes around object literal property names
    'quote-props': [2, 'as-needed', { keywords: false, unnecessary: true, numbers: false }],
    // specify whether double or single quotes should be used
    quotes: [2, 'single', 'avoid-escape'],
    // require or disallow use of semicolons instead of ASI
    semi: [2, 'always'],
    // enforce spacing before and after semicolons
    'semi-spacing': [2, { before: false, after: true }],
    // sort import declarations within module
    'sort-inputs': 0,
    // sort variables within the same declaration block
    'sort-vars': 0,
    // require or disallow space before blocks
    'space-before-blocks': 2,
    // require or disallow space before function opening parenthesis
    'space-before-function-paren': [2, { anonymous: 'always', named: 'never' }],
    // require or disallow spaces inside parentheses
    'space-in-parens': [2, 'never'],
    // require spaces around operators
    'space-infix-ops': 2,
    // Require or disallow spaces before/after unary operators
    'space-unary-ops': 0,
    // require or disallow a space immediately following the // or /* in a comment
    'spaced-comment': 0,
    // require regex literals to be wrapped in parentheses
    'wrap-regex': 0,

    // require effective use of strict mode directives
    // TODO: go over this! default is to leave out
    strict: 0
  }
};
