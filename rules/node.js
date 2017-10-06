'use strict';

module.exports = {
  env: {
    node: true
  },
  rules: {
    // enforce return after a callback
    'callback-return': 'off',

    // enforce require() on top-level module scope
    'global-require': 'off',

    // enforces error handling in callbacks (node environment)
    // OVERRIDE: I absolutely want this on!
    'handle-callback-err': ['error', '^(err|error)$'],

    // disallow mixing regular variable and require declarations
    'no-mixed-requires': ['off', false],

    // disallow use of new operator with the require function
    'no-new-require': 'off',

    // disallow string concatenation with __dirname and __filename
    'no-path-concat': 'error',

    // disallow use of process.env
    'no-process-env': 'off',

    // disallow process.exit()
    'no-process-exit': 'off',

    // restrict usage of specified node modules
    'no-restricted-modules': 'off',

    // disallow use of synchronous methods (off by default)
    'no-sync': 'off',

    // require effective use of strict mode directives
    // non es6 node applications need 'use strict', if the es6 rule set is used, this will be overwritten
    strict: ['off', 'global'],

    // overrides
    // allow use of console for service-side code
    'no-console': 'off'
  }
};
