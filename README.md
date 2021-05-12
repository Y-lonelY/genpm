[简体中文]((./README.zh-CN.md)) | English

# NPM-JAVASCRIPT-TEMPLATE

<b>NPM-JAVASCRIPT-TEMPLATE</b> is a javascript NPM Template Project! If you don't want to depend other Modernization FE Framework or UI Framework also, it will be a good choice to start with!

we support `.js`, `.ts` file type

<b>Attention，you need to config rollup.config.js's input param（which point the entry file）correctly<b>

Supported NPM Packages:

- [ele-utility](https://www.npmjs.com/package/ele-utility): Common usages in JavaScript!

## Start

### Publish

1. do `npm install` to init the project

2. develop under `src/` directory（or you can modify `rollup.config.js` -> `input` to change the rule）

3. do `npm run build` to output the target file in `/npm`

4. config your `package.json`

5. publish


### Local Test

Actually in `example/`，i had simplely init the module

- `cd example` goto example directory
- `yarn add ../npm` add target npm's file as local module
- `yarn start` start the project

Attention, i have created the `npm` directory, so you can publish the npm package in this folder, so you can config the `control.sh` to do something, in this case to avoid some unless dependencies!

## Troubleshooting

1. When i import this package in other modules, and you satrt to build, may catch this issue `Error: "[name] is not exported by [module]"`, see [Rollup-troubleshoting](https://rollupjs.org/guide/en/#error-name-is-not-exported-by-module) for more information.

Answers: 

1. set output format to `es`.

2. `import * as some from 'some'`


