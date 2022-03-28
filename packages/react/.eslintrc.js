const customizedOptions = {
  rules: {
    'react/destructuring-assignment': ['warn', 'always'],
  },
}

module.exports = {
  // choose what you want
  extends: [require.resolve('lintdd/dist/eslint4React')],
  ...customizedOptions,
}
