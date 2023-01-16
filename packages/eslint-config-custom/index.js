module.exports = {
  extends: [
    'turbo',
    'plugin:react/recommended',
    'airbnb',
  ],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
};
