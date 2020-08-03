module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    'jest/globals': true,
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    React: 'writable',
    __DEV__: true,
  },
  plugins: [
    '@typescript-eslint',
    'jest',
    'prettier',
    'prefer-arrow',
    'react',
    'react-hooks',
  ],
  root: true,
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    // eslint official
    'no-var-requires': 0,
    camelcase: 0,
    'no-console': 0,
    // @typescript-eslint
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    indent: 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-console': 0,
    '@typescript-eslint/no-var-requires': 0,

    // react
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['js', 'ts', 'jsx', 'tsx'],
      },
    ],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/prop-types': 'off',
    'react/prefer-stateless-function': 'off',

    // react hooks
    'react-hooks/rules-of-hooks': 'error',

    // import
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/prefer-default-export': 'off',

    // prettier
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: false,
        printWidth: 80,
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
        useTabs: false,
      },
    ],
  },
};
