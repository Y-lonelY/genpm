import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
// used to compile css into js by create style element
import postcss from 'rollup-plugin-postcss'

export default {
  input: 'src/index.tsx',
  output: {
    file: 'index.js',
    format: 'cjs',
    exports: 'auto',
  },
  plugins: [typescript(), resolve(), commonjs(), postcss()],
  external: ['react', 'react-dom'],
}
