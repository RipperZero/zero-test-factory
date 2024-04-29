import { ChangeEvent, FC, useCallback, useState } from "react";

type InputProps = {
  inputValue?: string;
};

const Input: FC<InputProps> = ({ inputValue }) => {
  // #region hooks start
  //   const [inputValue, setInputValue] = useState<string>("77777");
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start

  // #endregion logic functions end
  //   const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
  //     setInputValue(e.target.value);
  //   }, []);
  // #region render functions start
  return (
    <div>
      <input
        type="text"
        // defaultValue={"66666"}
        // onBlur={(e) => {
        //   console.log(e.target.value);
        //   console.log(e.target.defaultValue);
        // }}
        value={inputValue}
        // onChange={handleInputChange}
      ></input>
      <div>{`inputValue is =>>>> ${inputValue}`}</div>
    </div>
  );
  // #endregion render functions end
};

export { Input };
