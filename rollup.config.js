import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import replace from 'rollup-plugin-replace';

const plugins = [
  commonjs(),
  nodeResolve(),
  babel({ exclude: 'node_modules/**', babelHelpers: 'bundled' }),
  process.env.NODE_ENV === 'production' && terser(),
  replace({
    ENV: JSON.stringify(process.env.NODE_ENV || 'production'),
  }),
];

export default [
  {
    input: 'src/js/app/index.js',
    output: {
      file: 'assets/dist/app.js',
      format: 'iife',
      sourcemap: true,
    },
    plugins,
  },
  {
    input: 'src/js/post/index.js',
    output: {
      file: 'assets/dist/post.js',
      format: 'iife',
      sourcemap: true,
    },
    plugins,
  },
];
