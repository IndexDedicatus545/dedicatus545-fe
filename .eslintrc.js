module.exports = {
  env: {
    es2020: true,
    browser: true,
    worker: true,
  },
  ignorePatterns: [
    '*.js',
    '*.json',
    '*.html',
    'assets/**/*',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'unicorn',
    'sonarjs',
    'import',
    'prefer-arrow',
  ],
  extends: [
    'eslint:recommended', // basic eslint
    'plugin:@typescript-eslint/eslint-recommended', // overrides basic eslint for typescript
    'plugin:@typescript-eslint/recommended', // basic typescript
    'plugin:@typescript-eslint/recommended-requiring-type-checking', // basic typescript for types
    'plugin:unicorn/recommended',
    'plugin:sonarjs/recommended',
  ],
  overrides: [
    {
      files: ['*.spec.ts'],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/unbound-method': 'off',
      },
    },
  ],
  rules: {
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/dot-notation': 'warn', // ToDo: enforce error
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        'accessibility': 'explicit',
        'overrides': {
          'accessors': 'no-public',
          'constructors': 'no-public',
        },
      },
    ],
    '@typescript-eslint/indent': [
      'warn', // ToDo: enforce error
      2,
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        'multiline': {
          'delimiter': 'semi',
          'requireLast': true
        },
        'singleline': {
          'delimiter': 'semi',
          'requireLast': false,
        },
      },
    ],
    '@typescript-eslint/member-ordering': [
      'error',
      {
        'default': [
          'public-static-field',
          'protected-static-field',
          'private-static-field',

          'public-instance-field',
          'protected-instance-field',
          'private-instance-field',

          'public-static-method',
          'private-static-method',
          'protected-static-method',

          'public-constructor',
          'protected-constructor',
          'private-constructor',

          'public-instance-method',
          'protected-instance-method',
          'private-instance-method',
        ],
      },
    ],
    '@typescript-eslint/no-empty-function': 'warn', // ToDo: enforce error
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-floating-promises': 'warn', // ToDo: fix and remove (overrides recommended)
    '@typescript-eslint/no-implied-eval': 'warn', // ToDo: fix and remove (overrides recommended)
    '@typescript-eslint/no-inferrable-types': 'off', // conflicts with typedef
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': 'warn', // ToDo: fix and remove (overrides recommended)
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'warn', // ToDo: fix and remove (overrides recommended)
    '@typescript-eslint/no-unsafe-call': 'warn', // ToDo: fix and remove (overrides recommended)
    '@typescript-eslint/no-unsafe-member-access': 'warn', // ToDo: fix and remove (overrides recommended)
    '@typescript-eslint/no-unsafe-return': 'warn', // ToDo: fix and remove (overrides recommended)
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        'allowShortCircuit': true,
        'allowTernary': true,
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: "^_",
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-regexp-exec': 'warn', // ToDo: fix and remove (overrides recommended)
    '@typescript-eslint/restrict-template-expressions': 'warn', // ToDo: fix and remove (overrides recommended)
    '@typescript-eslint/require-await': 'off', // due to async in spec beforeEach
    '@typescript-eslint/semi': [
      'error',
      'always',
    ],
    '@typescript-eslint/typedef': [
      'warn', // ToDo: enforce error
      {
        arrayDestructuring: true,
        arrowCallSignature: true,
        arrowParameter: true,
        callSignature: true,
        memberVariableDeclaration: true,
        parameter: true,
        propertyDeclaration: true,
        objectDestructuring: true,
        variableDeclaration: true,
        variableDeclarationIgnoreFunction: true,
      },
    ],
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/unbound-method': [
      'warn', // ToDo: enforce error
      {
        ignoreStatic: true,
      }
    ],
    '@typescript-eslint/unified-signatures': 'error',
    'sonarjs/cognitive-complexity': 'warn', // ToDo: fix and remove (overrides recommended)
    'sonarjs/no-collapsible-if': 'warn', // ToDo: fix and remove (overrides recommended)
    'sonarjs/no-duplicate-string': 'warn', // ToDo: fix and remove (overrides recommended)
    'sonarjs/no-identical-functions': 'warn', // ToDo: fix and remove (overrides recommended)
    // 'unicorn/consistent-destructuring': 'warn', // ToDo: fix and remove (overrides recommended)
    'unicorn/consistent-function-scoping': 'off',
    'unicorn/empty-brace-spaces': 'off',
    'unicorn/error-message': 'warn', // ToDo: fix and remove (overrides recommended)
    'unicorn/explicit-length-check': 'off',
    'unicorn/no-array-callback-reference': 'off',
    'unicorn/no-array-for-each': 'off',
    // 'unicorn/no-array-push-push': 'warn', // ToDo: fix and remove (overrides recommended)
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-fn-reference-in-iterator': 'off',
    'unicorn/no-lonely-if': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-reduce': 'off',
    'unicorn/no-useless-undefined': 'off',
    // 'unicorn/prefer-date-now': 'warn', // ToDo: fix and remove (overrides recommended)
    'unicorn/prefer-text-content': 'warn', // ToDo: fix and remove (overrides recommended)
    'unicorn/prefer-number-properties': 'warn', // ToDo: fix and remove (overrides recommended)
    'unicorn/prefer-spread': 'warn', // ToDo: fix and remove (overrides recommended)
    'unicorn/prevent-abbreviations': 'off',
    'arrow-body-style': [
      'error',
      'as-needed',
    ],
    'brace-style': [
      'error',
      '1tbs',
    ],
    'camelcase': 'off',
    'comma-dangle': [
      'error',
      {
        objects: 'always-multiline',
        arrays: 'always-multiline',
        imports: 'always-multiline',
        functions: 'never',
      },
    ],
    'constructor-super': 'error',
    'curly': [
      'error',
      'multi-line',
    ],
    'eol-last': 'error',
    'eqeqeq': [
      'error',
      'smart',
    ],
    'guard-for-in': 'error',
    'id-blacklist': 'off',
    'id-match': 'off',
    'import/no-deprecated': 'error',
    'max-len': [
      'error',
      {
        code: 140,
        ignorePattern: '^import.*$',
      },
    ],
    'no-bitwise': 'warn', // ToDo: enforce error
    'no-caller': 'error',
    'no-console': [
      'error',
      {
        allow: [
          'info',
          'warn',
          'error'
        ],
      },
    ],
    'no-debugger': 'error',
    'no-empty': 'off',
    'no-eval': 'error',
    'no-fallthrough': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxBOF: 0,
      },
    ],
    'no-new-wrappers': 'error',
    'no-redeclare': 'error',
    'no-restricted-imports': [
      'error',
      'primeng',
      'lodash',
      'rxjs/Rx'
    ],
    'no-shadow': 'off',
    'no-trailing-spaces': 'error',
    'no-undef-init': 'error',
    'no-underscore-dangle': 'off',
    'no-unused-labels': 'error',
    'no-var': 'error',
    'object-curly-spacing': [
      'error',
      'always',
    ],
    'prefer-arrow/prefer-arrow-functions': 'error',
    'prefer-const': 'warn', // ToDo: enforce error (spec issues)
    'spaced-comment': [
      'error',
      'always',
      {
        markers: [
          '/'
        ],
      },
    ],
    'quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'quote-props': [
      'error',
      'consistent-as-needed',
    ]
  },
};
