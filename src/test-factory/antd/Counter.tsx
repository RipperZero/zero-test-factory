import { FC } from "react";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { Button, Space, Typography } from "antd";

type CounterState = {
  count: number;
  increment: () => void;
};

// const useCounterStore = create<CounterState>((set) => {
//   return {
//     count: 0,
//     increment: () => {
//       set((state) => {
//         return { count: state.count + 1 };
//       });
//     },
//   };
// });

const useImmerCounterStore = create(
  immer<CounterState>((set) => {
    return {
      count: 0,
      increment: () => {
        set((state) => {
          state.count += 1;
        });
      },
    };
  }),
);

type CounterProps = {};

const Counter: FC<CounterProps> = () => {
  // #region hooks start
  const { count, increment } = useImmerCounterStore();
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  const handleClick = () => {
    increment();
  };
  // #endregion logic functions end

  // #region render functions start
  return (
    <Space direction="vertical">
      <Typography.Title level={3}>{count}</Typography.Title>
      <Button type="primary" onClick={handleClick}>
        Add
      </Button>
    </Space>
  );
  // #endregion render functions end
};

export { Counter };
