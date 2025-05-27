import vue from 'rollup-plugin-vue';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import autoprefixer from 'autoprefixer';

export default {
  input: 'packages/components/index.js',
  output: [
    {
      format: 'es',
      file: 'dist/es.js',
    },
    {
      format: 'cjs',
      file: 'dist/cjs.js',
    },
  ],
  plugins: [
    // 首先处理 Vue 文件
    vue({
      css: false, // 让 postcss 处理 CSS
      compileTemplate: true,
    }),
    
    // 配置 node-resolve 插件
    resolve({
      extensions: ['.js', '.vue'],
    }),
    
    // 配置 commonjs 插件
    commonjs({
      include: /node_modules/,
    }),
    
    // 处理 CSS
    postcss({
      extract:'theme-chalk/style.css',
      plugins:[ autoprefixer()]
    }),
    
    terser(),
  ],
  external: ['vue'],
};