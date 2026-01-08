import { FC } from "react";

import { Space, Typography } from "antd";

import { ContextConsumer } from "./components/ContextConsumer";
import { CounterProvider } from "./components/provider/CounterProvider";

type ContextProps = unknown;

const Context: FC<ContextProps> = () => {
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <Space className="w-full p-6" orientation="vertical" size="large">
      <Typography.Title>Test React Context</Typography.Title>

      <CounterProvider>
        <ContextConsumer />
      </CounterProvider>
    </Space>
  );
  // #endregion render functions end
};

export type { ContextProps };
export { Context };
