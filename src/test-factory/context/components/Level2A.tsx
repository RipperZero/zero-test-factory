import { FC, PropsWithChildren } from "react";

type Level2AProps = unknown;

const Level2A: FC<PropsWithChildren<Level2AProps>> = ({ children }) => {
  console.log("Level2A render");
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <>
      <div>--Level2A</div>
      {children}
    </>
  );
  // #endregion render functions end
};

export type { Level2AProps };
export { Level2A };
