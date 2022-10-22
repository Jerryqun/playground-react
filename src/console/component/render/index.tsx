/* eslint-disable @iceworks/best-practices/recommend-polyfill */
import ObjectRender from './object';
import { getJSType } from '@/util';
import '../../index.less';

const map = {
  object: ObjectRender,
  array: ObjectRender,
};

export default ({ value, logprefix }: { value: string; logprefix: string }) => {
  const VM = map[getJSType(value)] || (() => <div>{value.toString()}</div>);
  return (
    <div className="console-wrap">
      {logprefix ? `${logprefix}:` : ''}
      <VM value={value} />
    </div>
  );
};
