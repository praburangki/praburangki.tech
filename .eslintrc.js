module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  plugins: ['@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:vue/recommended'],
  rules: {
    'indent-legacy': [
      'error',
      2,
      {
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        MemberExpression: 1,
        CallExpression: { arguments: 1 },
      },
    ],
    semi: 'error',
    'no-undef': 'error',
    'no-unused-vars': 'error',
    'require-jsdoc': 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/camelcase': ['error', { properties: 'never' }],
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
  },
  overrides: [
    {
      files: ['**/*.vue'],
      rules: {
        '@typescript-eslint/indent': 'off',
        'no-undef': 'error',
      },
    },
  ],
};
