/*
fn: fn执行函数
duration: 节流时间  默认300ms
*/
function fnThrottle(fn, interval = 300) {
  let self = fn,
    timer,
    firstTime = true;
  return function() {
    let args = arguments,
      _this = this;
    if (firstTime) {
      self.apply(_this, args);
      return (firstTime = false);
    }
    if (timer) {
      return false;
    }
    timer = setTimeout(function() {
      clearTimeout(timer);
      self.apply(_this, args);
    }, interval || 300);
  };
}

export default fnThrottle;
