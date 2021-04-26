module.exports = {
  rules: {
    '@typescript-eslint/ban-ts-ignore': ['off'],
    '@typescript-eslint/interface-name-prefix': ['off'],
    '@typescript-eslint/no-unused-expressions': ['off'],
    '@typescript-eslint/no-var-requires': ['off'],
    '@typescript-eslint/no-unused-vars': ['off'],
    '@typescript-eslint/no-use-before-define': ['off'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-async-promise-executor': ['off'],
    'no-empty-pattern': ['off'],
    'no-undef': ['error'],
    'no-var': ['error'],
    'object-curly-spacing': ['error', 'always'],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    semi: ['error', 'always'],
    'spaced-comment': ['off'],
    'no-prototype-builtins': ['off'],
    'sort-keys': ['off'],
    'space-before-function-paren': ['off'],
    indent: ['off'],
    'no-use-before-define': 'off',
  },
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['prettier', '@typescript-eslint'],
  globals: {
    React: true,
    JSX: true,
  },
};
