module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'eslint:recommended', 'prettier'],
  plugins: ['prettier', 'formatjs'],
  rules: {
    'formatjs/no-offset': 'error',
    'prettier/prettier': 'error',
    'no-restricted-exports': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'react/function-component-definition': [
      1,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/jsx-props-no-spreading': 1,
    'jsx-a11y/media-has-caption': 0,
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
};
