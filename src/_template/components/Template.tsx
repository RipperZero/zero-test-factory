import { FC, useEffect, useState } from "react";

type TemplateProps = unknown;

const Template: FC<TemplateProps> = () => {
  // #region hooks start
  const [_temp, setTemp] = useState();
  // #endregion hooks end

  // #region useEffect functions start
  useEffect(() => {
    console.log(_temp);
  }, [_temp]);
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <>
      <div>FC</div>
    </>
  );
  // #endregion render functions end
};

export { Template };
