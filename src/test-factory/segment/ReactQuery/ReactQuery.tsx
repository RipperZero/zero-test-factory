import { FC, useEffect, useState } from "react";

import { Tabs, TabsProps } from "antd";

import { TestBaseQuery } from "./TestBaseQuery";
import { TestMutation } from "./TestMutation";

const items: TabsProps["items"] = [
  {
    key: "TestBaseQuery",
    label: "TestBaseQuery",
    children: <TestBaseQuery />,
  },
  {
    key: "TestMutation",
    label: "TestMutation",
    children: <TestMutation />,
  },
];

type ReactQueryProps = {};

const ReactQuery: FC<ReactQueryProps> = () => {
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return <Tabs defaultActiveKey={items[1].key} items={items} />;
  // #endregion render functions end
};

export { ReactQuery };
