简体中文 | [English](./README.md)

# NPM-TEMPLATE

NPM-TEMPLATE is a NPM Template Project based on [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) 和 [rollup](https://rollupjs.org/guide/en/) , or you can just start with JavaScript!

we support `.js`, `.ts`, `.tsx` file type

**Attention，you need to config rollup.config.js's input param（which point the entry file）correctly**


# How

## publish

1. do `npm install` to import some dependences
2. develop under `src/` directory（or you can modify `package.json` - `main` to change the rule）
3. do `npm run build` to generate `index.js` on root，the publish it to the NPM platform

## local test

Actually in `example/`，i have created a React mini project by `create react app`, what you need to do is importing what you develop to the `example/node_module`

- `cd example` goto example directory
- `yarn add ../` add target file as module
- `yarn start` start the project