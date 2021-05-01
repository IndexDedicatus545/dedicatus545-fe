module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'eslint:recommended', // basic eslint
    'plugin:@typescript-eslint/eslint-recommended', // overrides basic eslint for typescript
    'plugin:@typescript-eslint/recommended', // basic typescript
    'plugin:unicorn/recommended',
    'plugin:sonarjs/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'unicorn',
    'sonarjs',
    'import',
    'prefer-arrow',
  ],
  rules: {},
};
