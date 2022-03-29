const customizedOptions = {
  rules: {},
}

module.exports = {
  // choose what you want
  extends: [require.resolve('lintdd/dist/eslint4TS')],
  ...customizedOptions,
}
