const jsxA11yPlugin = require('eslint-plugin-jsx-a11y');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const reactRefreshPlugin = require('eslint-plugin-react-refresh');

/** @type {import('eslint').Linter.FlatConfig[]} */
const reactConfig = [
  {
    name: 'harris/react',
    files: ['**/*.jsx', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      'jsx-a11y': jsxA11yPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'react-refresh': reactRefreshPlugin,
    },
    rules: {
      'react/boolean-prop-naming': 'off',
      'react/button-has-type': 'error',
      'react/checked-requires-onchange-or-readonly': 'error',
      'react/default-props-match-prop-types': ['error', { allowRequiredDefaults: false }],
      'react/destructuring-assignment': 'off',
      'react/display-name': 'off',
      'react/forbid-component-props': 'off',
      'react/forbid-dom-props': 'off',
      'react/forbid-elements': 'off',
      'react/forbid-foreign-prop-types': 'off',
      'react/forbid-prop-types': 'off',
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/hook-use-state': ['error', { allowDestructuredState: true }],
      'react/iframe-missing-sandbox': 'error',
      'react/jsx-boolean-value': ['error', 'never', { always: [] }],
      'react/jsx-child-element-spacing': 'off',
      'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
      'react/jsx-closing-tag-location': 'error',
      'react/jsx-curly-brace-presence': 'error',
      'react/jsx-curly-newline': 'error',
      'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],
      'react/jsx-filename-extension': 'off',
      // managed by prettier
      'react/jsx-first-prop-new-line': 'off',
      'react/jsx-fragments': ['error', 'syntax'],
      'react/jsx-key': 'error',
      'react/jsx-max-depth': 'off',
      'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
      'react/jsx-newline': 'off',
      'react/jsx-no-bind': 'off',
      'react/jsx-no-comment-textnodes': 'error',
      'react/jsx-no-constructed-context-values': 'error',
      'react/jsx-no-duplicate-props': ['error', { ignoreCase: false }],
      'react/jsx-no-leaked-render': 'error',
      'react/jsx-no-literals': 'off',
      'react/jsx-no-script-url': 'error',
      'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],
      'react/jsx-no-undef': 'error',
      'react/jsx-no-useless-fragment': 'error',
      // managed by prettier
      'react/jsx-one-expression-per-line': 'off',
      'react/jsx-pascal-case': 'error',
      'react/jsx-props-no-multi-spaces': 'error',
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-sort-props': [
        'error',
        {
          ignoreCase: true,
        },
      ],
      'react/jsx-tag-spacing': [
        'error',
        {
          closingSlash: 'never',
          beforeSelfClosing: 'always',
          afterOpening: 'never',
          beforeClosing: 'never',
        },
      ],
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'error',
      // managed by prettier
      'react/jsx-wrap-multilines': 'off',
      'react/no-access-state-in-setstate': 'error',
      'react/no-adjacent-inline-elements': 'off',
      'react/no-array-index-key': 'error',
      'react/no-arrow-function-lifecycle': 'error',
      'react/no-children-prop': 'error',
      'react/no-danger': 'error',
      'react/no-danger-with-children': 'error',
      'react/no-deprecated': 'error',
      // this is necessary for server-rendering
      'react/no-did-mount-set-state': 'off',
      'react/no-did-update-set-state': 'error',
      'react/no-direct-mutation-state': 'error',
      'react/no-find-dom-node': 'error',
      'react/no-invalid-html-attribute': 'error',
      'react/no-is-mounted': 'error',
      'react/no-multi-comp': 'off',
      'react/no-namespace': 'error',
      'react/no-object-type-as-default-prop': 'off',
      'react/no-redundant-should-component-update': 'error',
      'react/no-render-return-value': 'error',
      'react/no-set-state': 'off',
      'react/no-string-refs': 'error',
      'react/no-this-in-sfc': 'error',
      'react/no-typos': 'error',
      'react/no-unescaped-entities': 'error',
      'react/no-unknown-property': 'error',
      'react/no-unsafe': ['error', { checkAliases: true }],
      'react/no-unstable-nested-components': 'error',
      'react/no-unused-class-component-methods': 'error',
      'react/no-unused-prop-types': 'error',
      'react/no-unused-state': 'error',
      'react/no-will-update-set-state': 'error',
      'react/prefer-es6-class': ['error', 'always'],
      'react/prefer-exact-props': 'error',
      'react/prefer-read-only-props': 'off',
      'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
      'react/prop-types': [
        'error',
        {
          // ignore: ['children', 'classes'],
          ignore: [],
          customValidators: [],
          skipUndeclared: false,
        },
      ],
      // never with react17 runtime automatic
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': [
        'error',
        {
          forbidDefaultForRequired: true,
          ignoreFunctionalComponents: true,
        },
      ],
      'react/require-optimization': ['off', { allowDecorators: [] }],
      'react/require-render-return': 'error',
      'react/self-closing-comp': 'error',
      'react/sort-comp': 'off',
      'react/sort-default-props': [
        'error',
        {
          ignoreCase: true,
        },
      ],
      'react/sort-prop-types': [
        'error',
        {
          ignoreCase: true,
        },
      ],
      'react/state-in-constructor': ['error', 'never'],
      'react/static-property-placement': ['error', 'static public field'],
      'react/style-prop-object': 'error',
      'react/void-dom-elements-no-children': 'error',

      // hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',

      // jsx-a11y
      'jsx-a11y/alt-text': [
        'error',
        {
          elements: ['img', 'object', 'area', 'input[type="image"]'],
          img: [],
          object: [],
          area: [],
          'input[type="image"]': [],
        },
      ],
      'jsx-a11y/anchor-has-content': ['error', { components: [] }],
      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          components: ['Link'],
          specialLink: ['to'],
          aspects: ['noHref', 'invalidHref', 'preferButton'],
        },
      ],
      'jsx-a11y/aria-activedescendant-has-tabindex': 'error',
      'jsx-a11y/aria-props': 'error',
      'jsx-a11y/aria-proptypes': 'error',
      'jsx-a11y/aria-role': ['error', { ignoreNonDOM: false }],
      'jsx-a11y/aria-unsupported-elements': 'error',
      'jsx-a11y/autocomplete-valid': [
        'off',
        {
          inputComponents: [],
        },
      ],
      'jsx-a11y/click-events-have-key-events': 'error',
      'jsx-a11y/control-has-associated-label': [
        'error',
        {
          labelAttributes: ['label'],
          controlComponents: [],
          ignoreElements: ['audio', 'canvas', 'embed', 'input', 'textarea', 'tr', 'video'],
          ignoreRoles: [
            'grid',
            'listbox',
            'menu',
            'menubar',
            'radiogroup',
            'row',
            'tablist',
            'toolbar',
            'tree',
            'treegrid',
          ],
          depth: 5,
        },
      ],
      'jsx-a11y/heading-has-content': ['error', { components: [''] }],
      'jsx-a11y/html-has-lang': 'error',
      'jsx-a11y/iframe-has-title': 'error',
      'jsx-a11y/img-redundant-alt': 'error',
      'jsx-a11y/interactive-supports-focus': 'error',
      'jsx-a11y/label-has-associated-control': [
        'error',
        {
          labelComponents: [],
          labelAttributes: [],
          controlComponents: [],
          assert: 'both',
          depth: 25,
        },
      ],
      'jsx-a11y/lang': 'error',
      'jsx-a11y/media-has-caption': [
        'error',
        {
          audio: [],
          video: [],
          track: [],
        },
      ],
      'jsx-a11y/mouse-events-have-key-events': 'error',
      'jsx-a11y/no-access-key': 'error',
      'jsx-a11y/no-autofocus': ['error', { ignoreNonDOM: true }],
      'jsx-a11y/no-distracting-elements': [
        'error',
        {
          elements: ['marquee', 'blink'],
        },
      ],
      'jsx-a11y/no-interactive-element-to-noninteractive-role': [
        'error',
        {
          tr: ['none', 'presentation'],
        },
      ],
      'jsx-a11y/no-noninteractive-element-interactions': [
        'error',
        {
          handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
        },
      ],
      'jsx-a11y/no-noninteractive-element-to-interactive-role': [
        'error',
        {
          ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
          ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
          li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
          table: ['grid'],
          td: ['gridcell'],
        },
      ],
      'jsx-a11y/no-noninteractive-tabindex': [
        'error',
        {
          tags: [],
          roles: ['tabpanel'],
        },
      ],
      'jsx-a11y/no-redundant-roles': 'error',
      'jsx-a11y/no-static-element-interactions': [
        'error',
        {
          handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
        },
      ],
      'jsx-a11y/role-has-required-aria-props': 'error',
      'jsx-a11y/role-supports-aria-props': 'error',
      'jsx-a11y/scope': 'error',
      'jsx-a11y/tabindex-no-positive': 'error',

      // react-refresh
      'react-refresh/only-export-components': ['error', { allowConstantExport: true }],
    },
  },
];

module.exports = reactConfig;
