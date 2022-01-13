module.exports = {
  plugins: [
    'stylelint-a11y',
    'stylelint-config-rational-order/plugin',
    'stylelint-high-performance-animation',
    'stylelint-no-unsupported-browser-features',
    'stylelint-order',
    'stylelint-prettier',
  ],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended',
    'stylelint-config-rational-order',
    'stylelint-a11y/recommended',
    'stylelint-prettier/recommended',
    'stylelint-config-styled-components',
  ],
  customSyntax: '@stylelint/postcss-css-in-js',
  rules: {
    'value-keyword-case': null,
    'a11y/media-prefers-reduced-motion': [
      true,
      {
        severity: 'warning',
      },
    ],
    'a11y/no-outline-none': [
      true,
      {
        severity: 'warning',
      },
    ],
    'length-zero-no-unit': [
      true,
      {
        severity: 'warning',
      },
    ],

    // Base rules
    indentation: null,
    'selector-max-id': 1,
    'selector-list-comma-newline-after': 'always',
    'selector-type-case': [
      'lower',
      {
        ignoreTypes: ['/^\\$\\w+/'],
      },
    ],
    'selector-type-no-unknown': [
      true,
      {
        ignoreTypes: ['/^\\$\\w+/', '/-styled-mixin/'],
      },
    ],
    'rule-empty-line-before': [
      'always',
      { ignore: ['after-comment'], except: ['first-nested'] },
    ],
    'comment-empty-line-before': ['always', { except: ['first-nested'] }],
    'declaration-empty-line-before': null,
    'custom-property-empty-line-before': 'never',
    'custom-property-pattern': null,
    'block-opening-brace-space-before': 'always',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-block-single-line-max-declarations': 1,
    'color-function-notation': 'legacy',
    'alpha-value-notation': 'number',
    'declaration-property-value-disallowed-list': { '/^border/': ['none'] },
    'selector-class-pattern': '[a-zA-Z][a-zA-Z0-9_-]+$',
    'selector-id-pattern': '[a-zA-Z][a-zA-Z0-9_-]+$',
    'declaration-block-no-redundant-longhand-properties': [
      true,
      { ignoreShorthands: ['/transition/', '/flex/', '/grid/'] },
    ],
    'at-rule-empty-line-before': [
      'always',
      { ignore: ['after-comment'], except: ['first-nested'] },
    ],

    'no-descending-specificity': null,
    'max-nesting-depth': 3,

    'prettier/prettier': true,
    'plugin/no-low-performance-animation-properties': [
      true,
      {
        severity: 'warning',
        ignoreProperties: ['color', 'background-color', 'box-shadow'],
      },
    ],
    'plugin/no-unsupported-browser-features': [
      true,
      {
        severity: 'warning',
        ignore: ['fontface'],
      },
    ],
    'order/properties-order': [],
    'plugin/rational-order': [
      true,
      {
        'border-in-box-model': false,
        'empty-line-between-groups': true,
      },
    ],
    'property-no-vendor-prefix': [
      true,
      {
        severity: 'warning',
      },
    ],
    // Remove those rules when issues will be fixed into the postCSS syntax parser
    // https://github.com/stylelint/stylelint/issues/4574
    'function-whitespace-after': null,
    'unit-no-unknown': null,
    'function-name-case': null,
  },
};
