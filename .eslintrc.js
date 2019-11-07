module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
      ],
      env: {
        mocha: true,
      },
    },
  ],
  rules:{
    "linebreak-style": 0,
    "space-before-function-paren": 0,
    "comma-dangle": 0,
    "no-console" : 0,
    "semi" : 0,
    "no-param-reassign": 0,
    "no-undef": 0,
    "no-return-await" : 0,
    "dot-notation" : 0,
  }
};
