import { CSSProperties, FC } from "react";

import { Typography } from "antd";

import { twMerge } from "tailwind-merge";

type EmptyProps = {
  style?: CSSProperties;
  className?: string;
  tipClassName?: string;
  tip?: string;
};

const Empty: FC<EmptyProps> = ({ style, className, tipClassName, tip }) => {
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <div style={style} className={twMerge("m-auto", className)}>
      <Typography.Text
        className={twMerge(
          "whitespace-pre-line break-words text-center text-[14px] leading-[14px]",
          tipClassName,
        )}
      >
        {tip ?? "暂无数据"}
      </Typography.Text>
    </div>
  );
  // #endregion render functions end
};

export type { EmptyProps };
export { Empty };
