const eslintDefaults = require('@onlytests/eslint/index');

module.exports = {
  ...eslintDefaults,
  extends: 'next/core-web-vitals',
};
