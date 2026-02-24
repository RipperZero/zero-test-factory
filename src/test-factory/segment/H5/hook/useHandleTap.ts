import { useEffect, useRef } from "react";

import { useDebounceFn, useMemoizedFn } from "ahooks";
import { KonvaEventObject } from "konva/lib/Node";

type TapEvent = KonvaEventObject<Event>;

const useHandleTap = (
  handleTap: (event: TapEvent) => void,
  handleDblTap: (event: TapEvent) => void,
  delay = 200,
) => {
  const clearTimer = () => {
    if (!!timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }
  };

  const { run } = useDebounceFn(
    (event: TapEvent) => {
      clearTimer();

      handleDblTap(event);
    },
    { wait: delay - 50 },
  );

  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

  const onTap = useMemoizedFn((event: TapEvent) => {
    clearTimer();

    const newTimeoutId = setTimeout(() => {
      handleTap(event);
    }, delay);

    // eslint-disable-next-line react-hooks/immutability
    timeoutIdRef.current = newTimeoutId;
  });

  const onDblTap = useMemoizedFn((event: TapEvent) => {
    run(event);
  });

  useEffect(() => {
    return () => {
      clearTimer();
    };
  }, []);

  return { onTap, onDblTap };
};

export { useHandleTap };
