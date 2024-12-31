import { FC, useState } from "react";

import { Button, Space, Typography } from "antd";

// import { abortGetUsers, getUsers } from "@/api";

type CounterProps = unknown;

const Counter: FC<CounterProps> = () => {
  // #region hooks start
  const [count, setCount] = useState(0);

  // const deferredCount = useDeferredValue(count);
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
      <Button
        type="primary"
        // onClick={() => {
        //   getUsers()
        //     .then((res) => {
        //       console.log(res);
        //     })
        //     .catch((error) => {
        //       console.log(error);
        //     });
        // }}
      >
        Request
      </Button>
      <Button
        type="primary"
        // onClick={() => {
        //   abortGetUsers();
        // }}
      >
        Abort
      </Button>
    </Space>
  );
  // #endregion render functions end
};

export { Counter };
