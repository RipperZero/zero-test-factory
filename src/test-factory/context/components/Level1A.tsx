import { FC, PropsWithChildren } from "react";

type Level1AProps = unknown;

const Level1A: FC<PropsWithChildren<Level1AProps>> = ({ children }) => {
  console.log("Level1A render");
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <>
      <div>Level1A</div>
      {children}
    </>
  );
  // #endregion render functions end
};

export type { Level1AProps };
export { Level1A };
