import { FC } from "react";

import { animated, useSpring } from "@react-spring/web";

type BasicSpringProps = {};

const BasicSpring: FC<BasicSpringProps> = () => {
  // #region hooks start
  const [springs, springApi] = useSpring(() => {
    return { from: { x: 0 } };
  });
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  const handleClick = () => {
    springApi.start({
      from: { x: 0 },
      to: { x: 100 },
    });
  };
  // #endregion logic functions end

  // #region render functions start
  return (
    <animated.div
      style={{
        width: 80,
        height: 80,
        background: "#ff6d6d",
        borderRadius: 8,
        ...springs,
      }}
      onClick={handleClick}
    />
  );
  // #endregion render functions end
};

export { BasicSpring };
