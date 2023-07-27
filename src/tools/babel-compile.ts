/* eslint-disable */
const antd = require('antd');
const react = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');
const moment = require('moment');
const icons = require('@ant-design/icons');
class BabelCompile {
  scope: any = {};
  exports = {};
  constructor(scope = {}) {
    this.scope = {
      react,
      'react-dom': ReactDOM,
      moment,
      axios,
      antd,
      '@ant-design/icons': icons,
      ...scope,
    };
  }
  require = (key: string) => {
    if (this.scope[key] === undefined) throw new Error(`${key} is not define`);
    return this.scope[key];
  };
  excuteCode = (code: string): any => {
    const res: any = {
      isError: false,
      error: '',
      exports: {},
    };
    try {
      const parseCode = this.getES5Code(code);
      eval(parseCode)(this.require, this.exports);
      res.exports = this.exports;
    } catch (error) {
      console.log('catch transform error:', error);
      throw error;
    }
    return res;
  };
  getES5Code = (code: string): any => {
    const { transform } = window.Babel;
    try {
      const es5 = transform(code, {
        presets: ['env', 'react'],
      }).code;
      const transfromCode = transform(
        `(require, exports) => {
          ${es5};
        }`,
        {
          presets: ['env', 'react'],
          // 支持tsx转换
          plugins: [
            [
              'transform-typescript',
              {
                isTSX: true,
              },
            ],
          ],
        },
      ).code;
      return transfromCode;
    } catch (error) {
      console.log('catch transform error:', error);
      throw error;
    }
  };
}
export default BabelCompile;
