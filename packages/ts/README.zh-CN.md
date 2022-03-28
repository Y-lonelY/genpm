简体中文 | [English](./README.md)

# NPM-JAVASCRIPT-TEMPLATE

<b>NPM-JAVASCRIPT-TEMPLATE</b> 是一一个更为纯净的 javascript npm 模版, 如果你的 package 不希望依赖其他现代化框架和 UI 库, 以它作为模版是一个很棒的选择!

该项目提供对 `.js`, `.ts` 文件类型的支持

<b>注意，rollup.config.js 内的 input 参数（指明入口文件）需要正确配置<b>

目前已支持的 npm 库:

- [ele-utility](https://www.npmjs.com/package/ele-utility)


# 如何开始

## 发布

1. 在当前项目内执行 `npm install`，引入相关依赖

2. 在 `src/` 目录下开发（当然，你可以修改 `rollup.config.js` 内的 `input` 来修改这一规则）

3. 执行 `npm run build` 后, 将目标文件输出到 `/npm` 路径下, 然后

4. 配置 `package.json`

5. 发布到 npm 平台上即可（执行 `npm version` 和 `npm publish` 进行发布管理）

<b>注意，在使用第三方依赖时，要弄清楚其是你的项目开发或者发布是否对其依赖，如果仅仅是开发过程中需要对其进行依赖，则在安装时，通过 `npm i -D( or --save-dev) xxx` 进行引入</b>

<b>如果在打包时，不需要对第三方包进行引入，则全部应该放在 `devDependencies` 内</b>

## 本地测试

实际上在 `example/` 目录下，我只是简单地进行了初始化 `yarn init -y`

- `cd example` 进入到 example 目录

- `yarn add ../npm` 通过本地引入方式来引入项目

- `yarn start` 启动项目，进行测试

注意，我新建了一个 `npm` 的文件夹，你可以在该文件下进行 npm 包的发布，因此你可以修改 `control.sh` 脚本来执行一些简单的脚本。这么做的目的时减少一些不必要的依赖


## Troubleshooting

1. 在其他项目内引入你发布的包后, 无法找到指定模块下对应的方法, 报错 `Error: "[name] is not exported by [module]"`, 参考 [Rollup-troubleshoting](https://rollupjs.org/guide/en/#error-name-is-not-exported-by-module) 上关于该问题的解释

解决方案：

1. 设置打包配置为 `es` 模式

2. 改写引入代码为 `import * as some from 'some'`
