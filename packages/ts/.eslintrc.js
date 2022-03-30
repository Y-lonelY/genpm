const customizedOptions = {
  rules: {},
  parserOptions: {
    project: './packages/ts/tsconfig.json',
  },
}

module.exports = {
  // choose what you want
  extends: [require.resolve('lintdd/dist/eslint4TS')],
  ...customizedOptions,
}
