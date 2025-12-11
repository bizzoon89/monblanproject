//import './resizeHandler.js';
// import './vh'; - use it in case crosss browser vh value is needed

export const HTML = document.documentElement;
export const BODY = document.body;

export default Document.prototype.ready = (fn) => {
  if (fn && typeof fn === 'function') {
    document.addEventListener('DOMContentLoaded', () => {
      if (document.readyState === 'interactive' || document.readyState === 'complete') {
        return fn();
      }
    });
  }
};

export const ev = (eventName, data, target = document) => {
  const e = new CustomEvent(eventName, { detail: data });
  target.dispatchEvent(e);
};
