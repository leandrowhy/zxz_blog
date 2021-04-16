// 简单的防抖动函数 默认500ms
export function debounce(fn, delay = 500) {
  let timer = null;
  return function() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null;
    }, delay);
  };
}
