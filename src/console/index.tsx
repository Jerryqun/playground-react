import ReactDom from "react-dom";
import ConsoleRender from "./component/render";

export const consoleStore = [];

export default {
  print: (value, log) => {
    const el = document.querySelector(".playground-iframe-console-body");
    consoleStore.push(<ConsoleRender value={value} log={log} />);
    if (el) {
      ReactDom.render(consoleStore, el);
    }
  },
};
