import React, { useState } from 'react';
import { Editor, encode, decode } from 'playground-react';
import 'antd/dist/antd.css';
import './index.less';

const defualtCode = `import { Button } from 'antd';
export default () => {
  return <Button>hello</Button>
}`;

export default () => {
  const params: any = new URLSearchParams(location.hash.split('?')[1]);
  const [code, setCode] = useState(
    params.get('code') ? decode(params.get('code')) : defualtCode,
  );
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
          value={defualtCode}
          onSave={onSave}
        />
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
