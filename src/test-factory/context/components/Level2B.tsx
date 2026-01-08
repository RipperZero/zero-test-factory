import { FC, PropsWithChildren } from "react";

import { Count } from "./Count";

type Level2BProps = unknown;

const Level2B: FC<PropsWithChildren<Level2BProps>> = ({ children }) => {
  console.log("Level2B render");
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <>
      <div>
        --Level2B
        <Count />
      </div>
      {children}
    </>
  );
  // #endregion render functions end
};

export type { Level2BProps };
export { Level2B };
