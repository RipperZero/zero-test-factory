import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from "react";

const CounterProviderInner: FC = () => {
  console.log("===CounterProviderInner render===");

  return <></>;
};

type CounterContextType = {
  count: number;
  add: () => void;
};

const CounterContext = createContext<CounterContextType | null>(null);

type CounterProviderProps = unknown;

const CounterProvider: FC<PropsWithChildren<CounterProviderProps>> = ({
  children,
}) => {
  // #region hooks start
  const [count, setCount] = useState(0);
  console.log("count ===>>>", count);
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  const add = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  // const add = () => {
  //   setCount((prevCount) => prevCount + 1);
  // };
  // #endregion logic functions end

  // #region render functions start
  const activeValues: Pick<NonNullable<CounterContextType>, "count"> = {
    count: count,
  };

  const stableValues = useMemo<
    Pick<NonNullable<CounterContextType>, "add">
  >(() => {
    return {
      add: add,
    };
  }, [add]);

  return (
    <CounterContext value={{ ...activeValues, ...stableValues }}>
      <CounterProviderInner />
      {children}
    </CounterContext>
  );
  // #endregion render functions end
};

export type { CounterContextType };
export { CounterContext, CounterProvider };
