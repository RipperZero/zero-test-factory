import { FC, PropsWithChildren } from "react";

type Level1BProps = unknown;

const Level1B: FC<PropsWithChildren<Level1BProps>> = ({ children }) => {
  console.log("Level1B render");
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <>
      <div>Level1B</div>
      {children}
    </>
  );
  // #endregion render functions end
};

export type { Level1BProps };
export { Level1B };
