简体中文 | [English](./README.md)

# NPM-TEMPLATE

NPM-TEMPLATE 是一个基于 [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) 和 [rollup](https://rollupjs.org/guide/en/) 的 NPM 模版项目，当然你完全可以忽略 React 而是从一个 JavaScript 项目开始

该项目提供对 `.js`, `.ts`, `.tsx` 文件类型的支持

**注意，rollup.config.js 内的 input 参数（指明入口文件）需要正确配置**


# 如何开始

## 发布

1. 在当前项目内执行 `npm install`，引入相关依赖
2. 在 `src/` 目录下开发（当然你可以修改 `package.json` 内的 `main` 来修改这一规则）
3. 执行 `npm run build` 在根目录下生成 `index.js` 文件，将该文件发布到 npm 平台上即可（推荐在其他文件内，执行 `npm init` 进行发布管理）

## 本地测试

实际上在 `example/` 目录下，我通过 `create react app` 添加了一个 React 项目的单元，你需要做的就是将生成的目标文件引入到 `example/node_module` 内

- `cd example` 进入到 example 目录
- `yarn add ../` 引入根目录作为依赖
- `yarn start` 启动项目，进行测试

