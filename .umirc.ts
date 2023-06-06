import { defineConfig } from 'dumi';
// const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

export default defineConfig({
  mode: 'site',
  title: 'React Web IDE',
  outputPath: 'docs-dist',
  locales: [['zh-CN', '中文']],
  theme: {
    '@primary-background-color': '#4e60d4',
    '@text-color': '#6a6a6a',
    '@font-size-base': '13px',
    '@font-size-small': '12px',
    '@primary-color': '#4e60d4',
  },
  publicPath:
    process.env.NODE_ENV === 'production' // 生产环境静态资源指向cdn
      ? '/'
      : '/',
  history: { type: 'hash' },
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'lib',
        style: true,
      },
      'antd',
    ],
  ],
  links: [
    {
      herf: 'https://g.alicdn.com/code/lib/monaco-editor/0.36.0/min/vs/editor/editor.main.min.css',
    },
    {
      href: 'https://img.alicdn.com/imgextra/i3/O1CN01j7I6ru1Hdk3HtweHu_!!6000000000781-2-tps-128-128.png',
      rel: 'shortcut icon',
    },
  ],
  scripts: [
    'https://g.alicdn.com/code/lib/babel-standalone/7.21.2/babel.min.js',
    'https://g.alicdn.com/code/lib/monaco-editor/0.36.0/min/vs/loader.min.js',
    'https://g.alicdn.com/wisdomhammer/govding/prism.js',
  ],
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
  ],
  // metas: [
  //   {
  //     name: 'keywords',
  //     content: 'dumi, base on umi',
  //   },
  // ],
  // chainWebpack: (config) => {
  //   config.plugin('monaco-editor').use(MonacoWebpackPlugin, [
  //     {
  //       languages: ['javascript', 'typescript'],
  //     },
  //   ]);
  // },
  // more config: https://d.umijs.org/config
});
