module.exports = {
  root: true,
  extends: ['@youfocus/eslint-config'],
  env: {
    browser: true,
    es2021: true,
    webextensions: true,
  },
  plugins: [
    'react',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
};
