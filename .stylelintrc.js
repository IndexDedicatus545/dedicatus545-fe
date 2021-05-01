module.exports = {
  'extends': [
    'stylelint-config-recommended',
  ],
  'ignoreFiles': [
    '*.js',
    '*.ts',
    '*.html',
    '*.less',
    'dist/**/*',
    'assets/img/**/*',
    'assets/fonts/**/*',
  ],
  'rules': { // ToDo: fix and remove all rules with warning (they override recommended rules with errors)
    'color-hex-case': [
      'upper',
      {
        'severity': 'warning',
      },
    ],
    'color-named': [
      'never',
      {
        'severity': 'warning',
      },
    ],
    'declaration-block-trailing-semicolon': [
      'always',
      {
        'severity': 'warning',
      },
    ],
    'declaration-no-important': [
      true,
      {
        'severity': 'warning',
      },
    ],
    'font-weight-notation': [
      'numeric',
      {
        'severity': 'warning',
      },
    ],
    'font-family-no-missing-generic-family-keyword': [
      true,
      {
        'severity': 'warning',
      },
    ],
    'function-calc-no-invalid': [
      true,
      {
        'severity': 'warning',
      },
    ],
    'no-duplicate-selectors': [
      true,
      {
        'severity': 'warning',
      },
    ],
    'no-empty-source': [
      true,
      {
        'severity': 'warning',
      },
    ],
    'selector-class-pattern': [
      '^[^A-Z_]*$',
      {
        'severity': 'warning',
      },
    ],
    'selector-max-class': [
      4,
      {
        'severity': 'warning',
      },
    ],
    'selector-max-combinators': [
      4,
      {
        'severity': 'warning',
      },
    ],
    'selector-max-compound-selectors': [
      4,
      {
        'severity': 'warning',
      },
    ],
    'selector-max-id': [
      0,
      {
        'severity': 'warning',
      },
    ],
    'selector-max-type': [
      2,
      {
        'severity': 'warning',
      },
    ],
    'property-no-vendor-prefix': null, // allow webkit prefix
    'selector-no-vendor-prefix': null, // allow webkit prefix
    'value-no-vendor-prefix': null, // allow webkit prefix
  }
};
