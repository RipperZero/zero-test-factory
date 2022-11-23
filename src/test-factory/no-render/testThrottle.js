// 状态位
const throttleA = (fn, delay) => {
  let isValid = true;

  return function () {
    if (!isValid) {
      return;
    }

    isValid = false;

    setTimeout(() => {
      fn.apply(this, arguments);
      isValid = true;
    }, delay);
  };
};

// 时间戳
const throttleB = function (fn, delay) {
  const prev = Date.now();

  return function () {
    const now = Date.now();

    if (now - prev >= delay) {
      fn.apply(this, arguments);
    }
  };
};
