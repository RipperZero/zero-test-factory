import { FC, useEffect, useState } from "react";

import { Button, Space, Typography } from "antd";

import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type CounterState = {
  count: number;
  zero: string;
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
      zero: "湖人总冠军!!!",
      increment: () => {
        set((state) => {
          state.count += 1;
        });
      },
    };
  }),
);

const CountText: FC = () => {
  const { count } = useImmerCounterStore();

  return <Typography.Title level={3}>{count}</Typography.Title>;
};

const Counter: FC = () => {
  // #region hooks start
  const { increment } = useImmerCounterStore((state) => {
    const { zero, increment } = state;

    return {
      zero: zero,
      increment: increment,
    };
  });
  // #endregion hooks end

  const [aaa, setaaa] = useState(0);

  // #region useEffect functions start
  useEffect(() => {
    setTimeout(() => {
      setaaa(aaa + 1);
      setaaa(aaa + 1);
      setaaa(aaa + 1);
    }, 2000);
  }, [aaa]);

  setTimeout(() => {
    Promise.resolve(true);
    // setaaa(aaa + 1);
    // setaaa(aaa + 1);
    // setaaa(aaa + 1);
    // console.log(aaa);
  }, 2000);
  // #endregion useEffect functions end

  // #region logic functions start
  const handleClick = () => {
    console.log("handleClick");

    increment();
  };
  // #endregion logic functions end

  // #region render functions start
  return (
    <Space direction="vertical">
      <CountText />
      <Button type="primary" onClick={handleClick}>
        Add
      </Button>
    </Space>
  );
  // #endregion render functions end
};

export { Counter };
