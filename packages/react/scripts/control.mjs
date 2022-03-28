#!/usr/bin/env zx

import dayjs from 'dayjs'

const log = console.log
const ALERT_MESSAGE = '\nPlease confirm your input!\n'
const COSPATH = `cos://docs-1300606192/rls`
const cmds = ['build']

const [nodePath, zxPath, scriptPath, ...restData] = process.argv

let choose
if (!restData || restData.length === 0) {
  const crt = await question('Choose command: ', {
    choices: cmds,
  })
  choose = crt.split(' ')
} else {
  choose = restData
}

const [target, ...rest] = choose
switch (target) {
  case 'build':
    process.env.NODE_ENV = 'production'
    build(rest)
    break
  default:
    log(chalk.red(ALERT_MESSAGE))
    log(`Support command ===> ${cmds.join(' ')}`)
}

async function build(values) {
  await $`rollup --environment BUILD:production -c`
  await $`cp src/index.d.ts npm/index.d.ts`
  log(chalk.white.bgGreen.bold(`Successfully built at ${Date.now()}`))
}
