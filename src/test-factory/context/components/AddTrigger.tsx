import { FC, use, useEffect } from "react";

import { Button } from "antd";

import { CounterContext } from "./provider/CounterProvider";

type AddTriggerProps = unknown;

const AddTrigger: FC<AddTriggerProps> = () => {
  console.log("AddTrigger render");
  // #region hooks start
  const { add } = use(CounterContext) ?? {};
  // #endregion hooks end

  // #region useEffect functions start
  useEffect(() => {
    console.log("new add function", add);
  }, [add]);
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <Button
      type="primary"
      onClick={() => {
        add?.();
      }}
    >
      Trigger
    </Button>
  );
  // #endregion render functions end
};

export type { AddTriggerProps };
export { AddTrigger };
