import { FC, use } from "react";

import { Typography } from "antd";

import { CounterContext } from "./provider/CounterProvider";

type CountProps = unknown;

const Count: FC<CountProps> = () => {
  console.log("Count render");
  // #region hooks start
  const { count } = use(CounterContext) ?? {};
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return <Typography.Text>{`===>>>>COUNT===>>>>${count}`}</Typography.Text>;
  // #endregion render functions end
};

export type { CountProps };
export { Count };
