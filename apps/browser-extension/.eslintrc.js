module.exports = {
  root: true,
  extends: ['custom'],
  env: {
    browser: true,
    es2021: true,
  },
  plugins: [
    'react',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
};
