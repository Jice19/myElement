import vue from 'rollup-plugin-vue';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

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
      extract: 'style.css', // 提取 CSS 到单独的文件
      minimize: true,
      modules: false, // 如果你使用 CSS Modules，设置为 true
      use: {
        less: true, // 确保处理 Less 文件
      },
      plugins: [] // 可以添加其他 PostCSS 插件
    }),
    
    terser(),
  ],
  external: ['vue'],
};