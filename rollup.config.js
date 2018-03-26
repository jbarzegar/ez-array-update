import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import size from 'rollup-plugin-filesize'
import pkg from './package.json'

const libName = 'ez-array-update'

const plugins = [
  babel({
    plugins: ['external-helpers', 'transform-object-rest-spread'],
    externalHelpers: false,
    exclude: 'node_modules/**'
  }),
  size()
]

const input = pkg.source

export default [
  {
    input,
    plugins: [...plugins, commonjs(), resolve()],
    output: {
      name: libName,
      file: pkg['umd:main'],
      format: 'umd'
    }
  },
  {
    input,
    external: ['lodash/isFunction', 'lodash/isObject'],
    plugins,
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ]
  }
]
