declare module '*.css';
declare module '*.less';
declare module '*.json' {
  const value: any;
  export default value;
}

declare interface Window {
  require?: any;
  monaco?: any;
  Babel?: any;
}
