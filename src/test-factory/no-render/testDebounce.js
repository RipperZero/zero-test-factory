const debounce = (fn, delay) => {
  let timeout = null;

  return () => {
    if (!timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(function () {
      fn.apply(this, arguments);
    }, delay);
  };
};
