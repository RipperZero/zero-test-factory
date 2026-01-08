import { FC } from "react";

import { AddTrigger } from "./AddTrigger";

type Level3AProps = unknown;

const Level3A: FC<Level3AProps> = () => {
  console.log("Level3A render");
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <div>
      ----Level3A
      <AddTrigger />
    </div>
  );
  // #endregion render functions end
};

export type { Level3AProps };
export { Level3A };
