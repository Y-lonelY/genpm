// Invoked on the commit-msg git hook by yorkie.

const chalk = require('chalk')
// to get commit message from file
const msgPath = require('path').resolve('./.git/COMMIT_EDITMSG')
const msg = require('fs')
  .readFileSync(msgPath, 'utf-8')
  .trim()

const commitRE = /^(revert: )?(feat|improve|fix|docs|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release|dep)(\(.+\))?: .{1,50}/

if (!commitRE.test(msg)) {
  console.log()
  console.error(
    '  ' +
      chalk.bgRed.white(' ERROR ') +
      ' ' +
      chalk.red('invalid commit message format.') +
      '\n\n' +
      chalk.red(
        'Proper commit message format is required for automated changelog generation. Examples:\n\n',
      ) +
      '    \n    ' +
      chalk.green("\uD83D\uDCA5 feat(compiler): add 'comments' option") +
      '\n    ' +
      chalk.green("\ud83c\udf0a improve(compiler): make some improvements") +
      '\n    ' +
      chalk.green('\uD83D\uDC1B fix(compiler): fix some bug') +
      '\n    ' +
      chalk.green('\uD83D\uDCDD docs(compiler): add some docs') +
      '\n    ' +
      chalk.green('\uD83C\uDF37 UI(compiler): better styles') +
      '\n    ' +
      chalk.green('\uD83C\uDFF0 chore(compiler): Made some changes to the scaffolding') +
      '\n    ' +
      chalk.green(
        '\uD83C\uDF10 locale(compiler): Made a small contribution to internationalization',
      ) +
      '\n\n' +
      chalk.red('Normalize is required and having fun in coding~\n'),
  )
  process.exit(1)
}
