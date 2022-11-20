/* eslint-disable @iceworks/best-practices/recommend-polyfill */
import ObjectRender from "./object";
import { getJSType } from "@/util";
import "../../index.less";

const map = {
  object: ObjectRender,
};

export default ({ value, log }: { value: any[]; log: Function }) => {
  const renderArr = () =>
    value.map((item) => {
      const Component: any =
        map[getJSType(item)] ||
        (() => <div style={{ marginRight: 6 }}>{item.toString()}</div>);
      return <Component log={log} value={item} />;
    });

  return <div className="console-wrap">{renderArr()}</div>;
};
