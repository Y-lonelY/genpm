import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
// 用来压缩 js 代码
import { terser } from 'rollup-plugin-terser'
import multi from '@rollup/plugin-multi-entry'

const inputPath = {
  js: 'src/index.js',
  ts: 'src/typescript/index.tsx',
}

export default {
  input: {
    include: ['src/*.ts'],
    exclude: ['src/*.d.ts']
  },
  output: {
    dir: './npm/',
    format: 'cjs',
    exports: 'auto'
  },
  plugins: [multi(), typescript(), resolve(), terser(), commonjs()],
}
