import { FC, useState } from "react";

import { Button, Space, Typography } from "antd";

type CounterProps = {};

const Counter: FC<CounterProps> = () => {
  // #region hooks start
  const [count, setCount] = useState(0);
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  const handleAdd = () => {
    setCount((pre) => {
      return pre + 1;
    });
  };
  // #endregion logic functions end

  // #region render functions start
  return (
    <Space direction="vertical" size="large">
      <Typography.Text>{count}</Typography.Text>
      <Button type="primary" onClick={handleAdd}>
        Add
      </Button>
    </Space>
  );
  // #endregion render functions end
};

export { Counter };
