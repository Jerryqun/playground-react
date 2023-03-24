/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-bitwise */
import { useEffect, useRef, CSSProperties, memo } from 'react';
import FunctionEditor from './function-editor';
import './index.less';

export interface CodeProps {
  id?: string;
  /**
   * 语言设置
   * @default javascript
   */
  language?: string;
  /**
   * 默认值
   */
  value?: string;
  /**
   * 主题
   * @default vs-dark
   */
  theme?: 'vs-dark' | 'vs';
  /**
   * 是否展示小地图
   * @default true
   */
  minimapEnabled?: boolean;
  /** 容器样式 */
  style?: CSSProperties;
  /** onChange 钩子 */
  onChange?: Function;
  /** ctrl + s 钩子 */
  onSave?: Function;
  /** codeEditor 实例引用 */
  codeRef?: any;
  /** 使用 json 模式、函数模式、对比模式 */
  mode?: 'json' | 'function' | 'diff';
  /**
   * 默认代码段
   * @default () => {}
   */
  defaultCode?: string;
  /**
   * 没有改变代码自动设置为 undefined
   * @default false
   */
  noChangeClearCode?: boolean;
  /** 配置第三方依赖 */
  require?: any;
  /**
   * 设置防抖时间(ms)
   * @default 300
   */
  debounceTime?: number;
  originalValue?: string;
  /**
   * 是否禁用
   * @default false
   */
  readOnly?: boolean;
}
/**
 * 编辑器
 */
export const CodeEditor = memo(
  ({
    id = `code-container-${Math.random()}`,
    value = '',
    onChange = () => {},
    onSave = () => {},
    style = {},
    language = 'javascript',
    theme = 'vs-dark',
    codeRef = useRef<any>({}),
    minimapEnabled = true,
    ...rest
  }: CodeProps) => {
    // 加载资源
    const initialLoad = async () => {
      const _require: any = window.require;
      if (_require) {
        _require.config({
          paths: {
            vs: 'https://g.alicdn.com/code/lib/monaco-editor/0.36.0/min/vs',
          },
        });
        return new Promise((res) => {
          _require(['vs/editor/editor.main'], () => {
            const _code: any = window.monaco;
            _code.languages.register({
              id: 'tsx',
              extensions: ['.tsx'],
              aliases: ['TypeScript React'],
              mimetypes: ['text/tsx'],
            });

            _code.languages.onLanguage('tsx', function () {
              _code.editor.defineTheme('myTheme', {
                base: 'vs',
                inherit: false,
                rules: [{ token: 'comment', foreground: 'ffa500' }],
              });

              _code.languages.typescript.typescriptDefaults.setDiagnosticsOptions(
                {
                  noSemanticValidation: false,
                  noSyntaxValidation: false,
                },
              );

              _code.languages.typescript.typescriptDefaults.setCompilerOptions({
                target: _code.languages.typescript.ScriptTarget.ES6,
                jsx: _code.languages.typescript.JsxEmit.React,
                allowJs: true,
              });
            });

            const codeInstance = _code.editor.create(
              document.getElementById(id),
              {
                language,
                selectOnLineNumbers: true,
                automaticLayout: true,
                tabSize: 2,
                fontSize: 14,
                theme,
                fontWeight: '400',
                minimap: {
                  enabled: minimapEnabled,
                },
                scrollBeyondLastLine: false,
                value,
                ...rest,
              },
            );
            // ctrl + s 执行 onSave
            codeInstance.addCommand(
              _code.KeyMod.CtrlCmd | _code.KeyCode.KeyS,
              () => {
                const code = codeInstance.getValue();
                onSave(code);
              },
            );
            // onChange
            codeInstance.onDidChangeModelContent((e) => {
              const code = codeInstance.getValue();
              if (!e.isFlush) {
                onChange(code);
              }
            });
            res(codeInstance);
          });
        });
      }
    };
    // 更新值
    // useEffect(() => {
    //   codeRef.current.getMonacoInstance().then((instance) => {
    //     instance.setValue(value);
    //   });
    // }, [value]);
    useEffect(() => {
      const monacoInstance = initialLoad();
      // 挂到ref
      codeRef.current.getMonacoInstance = async () => {
        return monacoInstance;
      };
    }, []);
    return <div id={id} className="app-code-editor" style={style} />;
  },
  () => true, // 设置下缓存组件
);

export default ({ mode, ...props }: CodeProps) => {
  if (mode === 'function') {
    return <FunctionEditor {...props} />;
  }

  return <CodeEditor {...props} />;
};
