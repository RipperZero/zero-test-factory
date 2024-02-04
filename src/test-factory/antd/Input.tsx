import { FC, useState } from "react";

import { Input as AntdInput } from "antd";

type InputProps = {};

const Input: FC<InputProps> = ({}) => {
  // #region hooks start
  const [inputValue, setInputValue] = useState<string | undefined>();
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <AntdInput
      placeholder="Basic usage"
      value={inputValue}
      onChange={(e) => {
        const value = e.target.value;

        console.log("value", value);
        console.log("typeof value", typeof value);

        setInputValue(value);
      }}
    />
  );
  // #endregion render functions end
};

export { Input };
