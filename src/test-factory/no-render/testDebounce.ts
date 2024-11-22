// @see https://juejin.cn/post/7434486317134364735#heading-9

const debounce = (fn: Function, delay: number) => {
  let timeoutId: NodeJS.Timeout | undefined = undefined;

  const _debounce = () => {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      fn();
    }, delay);
  };

  return _debounce;
};

const aaa = () => {
  console.log(123456);
};

const debounceA = debounce(aaa, 1000);

debounceA();
debounceA();
debounceA();
debounceA();
