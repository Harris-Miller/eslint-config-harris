'use strict';

module.exports = {
  rules: {
    // enforces getter/setter pairs in objects
    'accessor-pairs': 2,
    // enforces return statements in callbacks of array's methods
    'array-callback-return': 2,
    // treat var statements as if they were block scoped
    'block-scoped-var': 2,
    // specify the maximum cyclomatic complexity allowed in a program
    complexity: [0, 10],
    // require return statements to either always or never specify values
    'consistent-return': 2,
    // specify curly brace conventions for all control statements
    curly: [2, 'multi-line'],
    // require default case in switch statements
    'default-case': 2,
    // enforces consistent newlines before or after dots
    'dot-location': 0,
    // encourages use of dot notation whenever possible
    'dot-notation': [0, { allowKeywords: true }], // F2 mixes this too much to have on
    // require the use of === and !==
    eqeqeq: 2,
    // make sure for-in loops have an if statement
    'guard-for-in': 2,
    // Blacklist certain identifiers to prevent them being used
    'no-alert': 1,
    // disallow use of arguments.caller or arguments.callee
    'no-caller': 2,
    // disallow lexical declarations in case/default clauses
    'no-case-declarations': 2,
    // disallow division operators explicitly at beginning of regular expression
    'no-div-regex': 0,
    // disallow else after a return in an if
    'no-else-return': 2,
    // disallow use of empty functions
    'no-empty-function': 0,
    // disallow use of empty destructuring patterns
    'no-empty-pattern': 2,
    // disallow comparisons to null without a type-checking operator
    'no-eq-null': 2,
    // disallow use of eval()
    'no-eval': 2,
    // disallow adding to native types
    'no-extend-native': 0,
    // disallow unnecessary function binding
    'no-extra-bind': 2,
    // disallow Unnecessary Labels
    'no-extra-label': 2,
    // disallow fallthrough of case statements
    'no-fallthrough': 2,
    // disallow the use of leading or trailing decimal points in numeric literals
    'no-floating-decimal': 2,
    // disallow the type conversions with shorter notations
    'no-implicit-coercion': 0,
    // disallow var and named functions in global scope
    'no-implicit-globals': 2,
    // disallow use of eval()-like methods
    'no-implied-eval': 2,
    // disallow this keywords outside of classes or class-like objects
    'no-invalid-this': 2,
    // disallow usage of __iterator__ property
    'no-iterator': 2,
    // disallow use of labels for anything other then loops and switches
    'no-labels': [2, { allowLoop: false, allowSwitch: false }],
    // disallow unnecessary nested blocks
    'no-lone-blocks': 2,
    // disallow creation of functions within loops
    'no-loop-func': 2,
    // disallow the use of magic numbers
    'no-magic-numbers': 0,
    // disallow use of multiple spaces
    'no-multi-spaces': 2,
    // disallow use of multiline strings
    'no-multi-str': 2,
    // disallow reassignments of native objects
    'no-native-reassign': 2,
    // disallow use of new operator when not part of the assignment or comparison
    'no-new': 2,
    // disallow use of new operator for Function object
    'no-new-func': 2,
    // disallows creating new instances of String, Number, and Boolean
    'no-new-wrappers': 2,
    // disallow use of (old style) octal literals
    'no-octal': 2,
    // disallow use of octal escape sequences in string literals, such as
    // var foo = 'Copyright \251';
    'no-octal-escape': 2,
    // disallow reassignment of function parameters
    'no-param-reassign': [0, { props: false }], // if full es6, should be 2, with param defaults
    // disallow usage of __proto__ property
    'no-proto': 2,
    // disallow declaring the same variable more then once
    'no-redeclare': 2,
    // allow use of assignment in return statement
    'no-return-assign': 0,
    // disallow use of `javascript:` urls.
    'no-script-url': 2,
    // disallow assignments where both sides are exactly the same
    'no-self-assign': 2,
    // disallow comparisons where both sides are exactly the same
    'no-self-compare': 2,
    // disallow use of comma operator
    'no-sequences': 2,
    // restrict what can be thrown as an exception
    'no-throw-literal': 2,
    // disallow unmodified conditions of loops
    'no-unmodified-loop-condition': 0,
    // disallow usage of expressions in statement position
    'no-unused-expressions': [2, { allowShortCircuit: true, allowTernary: true }],
    // disallow unused labels
    'no-unused-labels': 2,
    // disallow unnecessary .call() and .apply()
    'no-useless-call': 2, // TODO: legecy should have this be 0
    // disallow use of void operator
    'no-void': 2,
    // disallow usage of configurable warning terms in comments: e.g. todo
    'no-warning-comments': [0, { terms: ['todo', 'fixme', 'xxx'], location: 'start' }],
    // disallow use of the with statement
    'no-with': 2,
    // require use of the second argument for parseInt()
    radix: 2,
    // requires to declare all vars on top of their containing scope
    'vars-on-top': 0,
    // require immediate function invocation to be wrapped in parentheses
    'wrap-iife': [2, 'inside'],
    // require or disallow Yoda conditions
    yoda: 2
  }
};
