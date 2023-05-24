import { CSSProperties, FC, useState } from "react";

const EVENT_TYPE_TO_COOLOR: Record<string, CSSProperties["backgroundColor"]> = {
  empty: "white",
  touchstart: "blue",
  touchend: "chocolate",
  mousedown: "green",
  mouseup: "pink",
  click: "yellow",
};

type TestMobileProps = {};

const TestMobile: FC<TestMobileProps> = () => {
  // #region hooks start
  const [count, setCount] = useState(0);
  const [targetName, setTargetName] = useState("empty");
  const [eventType, setEventType] = useState("empty");
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  const handleEvent = (target: string, eventType: string) => {
    console.log(`${target}---------${eventType}`);

    setTargetName(target);
    setEventType(eventType);

    setCount((pre) => {
      return pre + 1;
    });
  };
  // #endregion logic functions end

  // #region render functions start
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <div style={{ height: "10%", textAlign: "center", fontWeight: "bold" }}>
        <div>{`COUNT------${count}`}</div>
        <div>{`TARGETNAME------${targetName}`}</div>
        <div>{`EVENTTYPE------${eventType}`}</div>
      </div>
      <div
        style={{
          height: "30%",
          textAlign: "center",
          fontWeight: "bold",
          backgroundColor: EVENT_TYPE_TO_COOLOR[eventType],
        }}
        onMouseDown={(e) => {
          handleEvent("div", e.type);
        }}
        // onMouseUp={(e) => {
        //   handleEvent("div", e.type);
        // }}
        // onClick={(e) => {
        //   handleEvent("div", e.type);
        // }}
        // onTouchStart={(e) => {
        //   handleEvent("div", e.type);
        // }}
        // onTouchEnd={(e) => {
        //   handleEvent("div", e.type);
        // }}
      >
        TestMobile
      </div>
    </div>
  );
  // #endregion render functions end
};

export { TestMobile };
