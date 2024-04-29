import { FC, useRef, useState } from "react";

import { Input as AntdInput } from "antd";

type InputProps = {};

const Input: FC<InputProps> = ({}) => {
  // #region hooks start
  const inputRef = useRef<HTMLInputElement | null>(null);
  inputRef.current?.setSelectionRange(3, 3);
  const selectionStart = inputRef.current?.selectionStart;
  const selectionEnd = inputRef.current?.selectionEnd;
  console.log("selectionStart ===>>>>>", selectionStart);
  console.log("selectionEnd ===>>>>>", selectionEnd);

  const [inputValue, setInputValue] = useState<string | undefined>("123456");
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <input
      ref={(node) => {
        inputRef.current = node;
      }}
      // placeholder="Basic usage"
      // value={inputValue}
      value={Number(inputValue).toLocaleString()}
      onChange={(e) => {
        inputRef.current?.setSelectionRange(3, 3);
        // const value = e.target.value;
        // remove any non-digit characters
        const value = e.target.value.replace(/[^\d]/g, "");
        // 保存光标位置
        const selectionStart = e.target.selectionStart;
        const selectionEnd = e.target.selectionEnd;
        console.log("selectionStart 111111", selectionStart);
        console.log("selectionEnd 111111", selectionEnd);
        // inputRef.current?.setSelectionRange(1, 2);

        // console.log("value", value);
        // console.log("typeof value", typeof value);

        setInputValue(value);
      }}
    />
  );
  // #endregion render functions end
};

export { Input };
