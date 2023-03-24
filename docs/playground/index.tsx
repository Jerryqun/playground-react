import React, { useEffect, useState } from 'react';
import { Editor, encode } from 'playground-react';
import 'antd/dist/antd.css';
import './index.less';

const key = 'react-playground-code';

const defualtCode = `import { Button } from 'antd';
export default () => {
  return <Button>hello</Button>
}`;

export default () => {
  const [code, setCode] = useState(localStorage.getItem(key) || defualtCode);
  useEffect(() => {
    code && localStorage.setItem(key, code);
    return () => {
      localStorage.removeItem(key);
    };
  }, [code]);
  const codeRef = React.useRef<any>({});

  const onSave = (value) => setCode(value);

  return (
    <div className="playground">
      <div className="playground-left">
        <Editor
          mode="function"
          language="typescript"
          codeRef={codeRef}
          style={{ width: '100%', height: '100vh' }}
          value={code}
          onSave={onSave}
        />
        <button
          onClick={() => {
            setCode(defualtCode);
            codeRef.current.getMonacoInstance().then((instance) => {
              instance.setValue(defualtCode);
            });
          }}
          className="reset"
        >
          重置
        </button>
      </div>

      <div className="playground-right">
        <iframe
          key={code}
          src={`${location.pathname}#/~demos/docs-iframe?code=${encode(code)}`}
        />
      </div>
    </div>
  );
};
