#!/usr/bin/env zx

import chalk from 'chalk'

const log = console.log
const ALERT_MESSAGE = '\nPlease confirm your input!\n'
const cmds = ['build']
const [...restData] = process.argv.slice(3)

let choosed
if (!restData || restData.length === 0) {
  const crt = await question('Choose command: ', {
    choices: cmds,
  })
  choosed = crt.split(' ')
} else {
  choosed = restData
}
console.log(choosed)
const [target, ...rest] = choosed
switch (target) {
  case 'build':
    process.env.NODE_ENV = 'production'
    build(rest)
    break
  default:
    log(chalk.red(ALERT_MESSAGE))
    log(`Support command ===> ${cmds.join(' ')}`)
}

function preHandleRest(data) {
  const crt = {}
  if (Array.isArray(data) && data.length > 0) {
    data.forEach((item) => {
      if (item.includes('=')) {
        const [key, value] = item.split('=')
        crt[key] = value
      }
    })
  }
  return crt
}

async function build(values) {
  const params = preHandleRest(values)
  process.env.ROLLUP_MODE = params.mode || false

  await $`rollup -c`
  await $`cp src/types.d.ts dist/`
  await $`mv dist/multi-entry.js dist/index.js`
  log(chalk.white.bgGreen.bold(`Successfully built at ${Date.now()}`))
}
