module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['prettier', 'eslint:recommended', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
    'no-unused-vars': 0,
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
  },
};
