import { FC } from "react";

import { Space } from "antd";

import { Level1A } from "./Level1A";
import { Level1B } from "./Level1B";
import { Level2A } from "./Level2A";
import { Level2B } from "./Level2B";
import { Level3A } from "./Level3A";
import { Level3B } from "./Level3B";

type ContextConsumerProps = unknown;

const ContextConsumer: FC<ContextConsumerProps> = () => {
  console.log("ContextConsumer render");

  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <Space orientation="vertical" size="large">
      <Level1A>
        <Level2A>
          <Level3A />
        </Level2A>
      </Level1A>

      <Level1B>
        <Level2B>
          <Level3B />
        </Level2B>
      </Level1B>
    </Space>
  );
  // #endregion render functions end
};

export type { ContextConsumerProps };
export { ContextConsumer };
