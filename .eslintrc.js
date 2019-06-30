/* eslint-disable @typescript-eslint/no-var-requires */
const typescriptEslintRecommended = require('@typescript-eslint/eslint-plugin/dist/configs/recommended.json');
const typescriptEslintPrettier = require('eslint-config-prettier/@typescript-eslint');

module.exports = {
  env: {
    node: true,
  },
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': 'off',
    'jsx-a11y/label-has-for': [
      2,
      {
        components: ['Label'],
        required: {
          some: ['nesting', 'id'],
        },
        allowChildren: true,
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['.eslintrc.js', '**/__tests__/**/*', 'setupTest.ts'],
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        devDependencies: ['.eslintrc.js', '**/__tests__/**/*'],
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx'],
      },
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      // NOTE: Workaround for no nested extends possible.
      // See https://github.com/eslint/eslint/issues/8813.
      // Working solution would be following, if we had nested extends:
      // ```
      // extends: [
      //   'airbnb-base',
      //   'plugin:@typescript-eslint/recommended',
      //   'prettier/@typescript-eslint',
      //   'prettier',
      // ],
      // ```
      plugins: ['@typescript-eslint', 'prettier'],
      rules: Object.assign(
        typescriptEslintRecommended.rules,
        typescriptEslintPrettier.rules,
        {
          '@typescript-eslint/explicit-function-return-type': 'error',
        },
      ),
    },
    {
      files: [
        'setupTest.js',
        'setupTest.ts',
        '*.spec.js',
        '*.spec.ts',
        '*.spec.tsx',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
