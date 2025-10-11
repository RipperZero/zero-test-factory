import { FC } from "react";

import { Button, Typography } from "antd";

type TestProps = unknown;

const Test: FC<TestProps> = () => {
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <div className="flex flex-col gap-[8px]">
      <p>element p</p>

      <div className="border">border</div>

      <form>
        <div>
          <p>account</p>
          <input className="hide-input-autocomplete-background" />
        </div>

        <div>
          <p>pass</p>
          <input
            type="password"
            className="hide-input-autocomplete-background hide-input-password-icon"
          />
        </div>

        <button type="submit">submit</button>
      </form>

      <Button className="w-[200px] rounded-[16px]">Test</Button>

      <div className="scrollbar max-h-[200px] overflow-y-auto bg-red-500 text-center">
        <Typography.Title>Scroll</Typography.Title>

        {Array.from({ length: 10 }).map((_, index) => {
          return (
            <div key={index} className="m-6 h-[50px] bg-blue-500">
              {index}
            </div>
          );
        })}
      </div>
    </div>
  );
  // #endregion render functions end
};

export type { TestProps };
export { Test };
