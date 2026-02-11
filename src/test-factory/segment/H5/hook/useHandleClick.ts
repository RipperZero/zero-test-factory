import { MouseEvent, useEffect, useRef } from "react";

import { useMemoizedFn } from "ahooks";

type ClickEvent<T extends Element> = MouseEvent<T, globalThis.MouseEvent>;

const useHandleClick = <T extends Element>(
  handleClick: (event: ClickEvent<T>) => void,
  handleDoubleClick: (event: ClickEvent<T>) => void,
  delay = 200,
) => {
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

  const clearTimer = () => {
    if (!!timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }
  };

  const onClick = useMemoizedFn((event: ClickEvent<T>) => {
    clearTimer();

    if (event.detail === 1) {
      const newTimeoutId = setTimeout(() => {
        handleClick(event);
      }, delay);

      timeoutIdRef.current = newTimeoutId;
    }
  });

  const onDoubleClick = useMemoizedFn((event: ClickEvent<T>) => {
    clearTimer();

    handleDoubleClick(event);
  });

  useEffect(() => {
    return () => {
      clearTimer();
    };
  }, []);

  return { onClick, onDoubleClick };
};

export { useHandleClick };
