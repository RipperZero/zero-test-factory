import { Activity, FC, useEffect, useRef, useState } from "react";

const getRandomColor = () => {
  console.log("====>>>> run getRandomColor");

  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const TestActivity: FC = () => {
  useEffect(() => {
    console.log("TestActivity mounted");
    return () => console.log("TestActivity unmounted");
  }, []);

  return (
    <div className="flex flex-col gap-2 border-2 border-solid border-indigo-600 p-2">
      <div>Test Activity</div>

      <div className="h-[20px] w-[50px] bg-amber-400" />
    </div>
  );
};

const TestCompilerA: FC<{
  printCountB: () => void;
}> = ({ printCountB }) => {
  console.log("TestCompilerA render");

  // use var to ignore react compiler
  // var color = getRandomColor();
  const color = getRandomColor();

  printCountB();

  return (
    <div className="flex flex-col gap-2 border-2 border-solid border-indigo-600 p-2">
      <div>TestCompilerA → run printCountB(props) every render</div>

      <div className="flex gap-4">
        <div style={{ background: color }} className="h-[20px] w-[50px]"></div>
        <div>→ color will change when render</div>
      </div>
    </div>
  );
};

const TestCompilerB: FC<{
  printCountA: () => void;
}> = ({ printCountA }) => {
  console.log("TestCompilerB render");

  // use var to ignore react compiler
  // var color = getRandomColor();
  const color = getRandomColor();

  printCountA();

  return (
    <div className="flex flex-col gap-2 border-2 border-solid border-indigo-600 p-2">
      <div>TestCompilerB → run printCountA(props) every render</div>

      <div className="flex gap-4">
        <div style={{ background: color }} className="h-[20px] w-[50px]"></div>
        <div>→ color will change when render</div>
      </div>
    </div>
  );
};

const TestCompilerAandB: FC<{
  printCountA: () => void;
  printCountB: () => void;
}> = ({ printCountA, printCountB }) => {
  console.log("TestCompilerAandB render");

  // use var to ignore react compiler
  // var color = getRandomColor();
  const color = getRandomColor();

  printCountA();
  printCountB();

  return (
    <div className="flex flex-col gap-2 border-2 border-solid border-indigo-600 p-2">
      <div>
        TestCompilerAandB → run printCountA&printCountB(props) every render
      </div>

      <div className="flex gap-4">
        <div style={{ background: color }} className="h-[20px] w-[50px]"></div>
        <div>→ color will change when render</div>
      </div>
    </div>
  );
};

type TestCompilerProps = unknown;

const TestCompiler: FC<TestCompilerProps> = () => {
  // #region hooks start
  const [isActivity, setIsActivity] = useState(true);

  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const objC = { count: 0 };
  const refC = useRef({ count: 0 });
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  const printCountA = () => {
    console.log("countA", countA);
  };
  const printCountB = () => {
    console.log("countB", countB);
  };
  const printAllC = () => {
    console.log("objC", objC);
    console.log("refC", refC.current);
  };
  // #endregion logic functions end

  // #region render functions start
  return (
    <div className="m-6 flex flex-col gap-6">
      <div className="card flex flex-col gap-2">
        <button
          className="w-[200px] cursor-pointer border"
          onClick={() => setIsActivity((pre) => !pre)}
        >
          {isActivity ? "Hide Activity" : "Show Activity"}
        </button>

        <button
          className="w-[200px] cursor-pointer border"
          onClick={() => setCountA((pre) => pre + 1)}
        >
          countA(state) is {countA}
        </button>

        <button
          className="w-[200px] cursor-pointer border"
          onClick={() => setCountB((pre) => pre + 1)}
        >
          countB(state) is {countB}
        </button>

        <button
          className="w-[200px] cursor-pointer border"
          // eslint-disable-next-line react-hooks/immutability
          onClick={() => {
            objC.count += 1;
            refC.current.count += 1;
          }}
        >
          Add all CountC(obj & ref)
        </button>
      </div>

      <div>
        <button className="w-[200px] cursor-pointer border" onClick={printAllC}>
          printAllC(obj & ref)
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <Activity mode={isActivity ? "visible" : "hidden"}>
          <TestActivity />
        </Activity>

        <TestCompilerA printCountB={printCountB} />
        <TestCompilerB printCountA={printCountA} />
        <TestCompilerAandB
          printCountA={printCountA}
          printCountB={printCountB}
        />
      </div>
    </div>
  );
  // #endregion render functions end
};

export type { TestCompilerProps };
export { TestCompiler };
