import { FC } from "react";

import { Divider } from "antd";

import { clsx } from "clsx";

type FlexProps = unknown;

const cardCount = 4;

const calculateCardWidth = (arrayLength: number) => {
  return arrayLength > 0 ? `${Math.floor(100 / arrayLength)}%` : undefined;
};

const cardWidth = calculateCardWidth(cardCount);

const Flex: FC<FlexProps> = () => {
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <div className="h-screen">
      <div className="flex h-1/2 w-[1200px] bg-black">
        {Array.from({ length: cardCount }).map((_, index) => {
          const oddIndex = index % 2 === 1;

          return (
            <div
              key={index}
              style={{
                width: cardWidth,
              }}
              className={"flex"}
            >
              <div
                className={clsx(
                  "flex-1",
                  oddIndex ? "bg-sky-400" : "bg-green-400",
                )}
              >
                {index + 1}
              </div>
              {/* <Divider
                type="vertical"
                style={{ margin: 0, background: "red", height: "100%" }}
              /> */}
              <div
                style={{
                  //   flex: "0 0 1px",
                  width: "10px",
                  flexBasis: "1px",
                }}
                className="h-full bg-red-800"
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
  // #endregion render functions end
};

export { Flex };
