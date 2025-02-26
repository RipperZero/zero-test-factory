import { FC } from "react";

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
    </div>
  );
  // #endregion render functions end
};

export type { TestProps };
export { Test };
