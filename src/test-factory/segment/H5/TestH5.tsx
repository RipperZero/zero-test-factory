import {
  CSSProperties,
  FC,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { produce } from "immer";

import Food from "../../assets/img/Food.jpg";
import LakersLogo from "../../assets/img/LakersLogo.jpg";
import { useHandleClick } from "./hook/useHandleClick";
import { Konva } from "./Konva";

// import { toImage } from "./tools/ToolUtils";

const EVENT_TYPE_TO_COLOR: Record<string, CSSProperties["backgroundColor"]> = {
  empty: "white",
  touchstart: "blue",
  touchend: "chocolate",
  mousedown: "green",
  mouseup: "pink",
  click: "yellow",
  dblclick: "black",
};

type TestH5Props = {};

const TestH5: FC<TestH5Props> = () => {
  // #region hooks start
  const [count, setCount] = useState(0);
  const [targetName, setTargetName] = useState("empty");
  const [eventType, setEventType] = useState("empty");
  const [konva, setKonva] = useState<{
    width: number;
    height: number;
    dragSourceSrc?: string | null;
  }>({
    width: 0,
    height: 0,
    dragSourceSrc: null,
  });

  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);
  // const onClickPreTimeStamp = useRef<number | null>(null);
  const konvaContainerRef = useRef<HTMLDivElement | null>(null);

  const { onClick: onDivClick, onDoubleClick: onDivDoubleClick } =
    useHandleClick<HTMLDivElement>(
      (e) => {
        handleEvent("div", e.type);
        // e.preventDefault();
        // e.stopPropagation();
      },
      (e) => {
        handleEvent("div", e.type);
      },
    );
  // #endregion hooks end

  // #region useEffect functions start
  useEffect(() => {
    return () => {
      clearTimer();
    };
  }, []);

  useLayoutEffect(() => {
    if (konvaContainerRef.current === null) {
      return;
    }

    const konvaContainer = konvaContainerRef.current;

    setKonva(
      produce((draft) => {
        draft.height = konvaContainer.offsetHeight;
        draft.width = konvaContainer.offsetWidth;
      }),
    );
  }, []);
  // #endregion useEffect functions end

  // #region logic functions start
  const clearTimer = () => {
    if (!!timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }
  };

  const handleEvent = (target: string, eventType: string) => {
    console.log(`${target}---------${eventType}`);

    setTargetName(target);
    setEventType(eventType);

    setCount((pre) => {
      return pre + 1;
    });
  };

  const setDragSource = (dragSourceSrc: string) => {
    setKonva(
      produce((draft) => {
        draft.dragSourceSrc = dragSourceSrc;
      }),
    );
  };
  // #endregion logic functions end

  // #region render functions start
  return (
    <div style={{ height: "100vh", width: "100vw", overflowY: "scroll" }}>
      <div style={{ height: "10%", textAlign: "center", fontWeight: "bold" }}>
        <div>{`COUNT------${count}`}</div>
        <div>{`TARGETNAME------${targetName}`}</div>
        <div>{`EVENTTYPE------${eventType}`}</div>
      </div>
      <div
        style={{
          height: "5%",
          userSelect: "none",
          border: "1px solid grey",
          textAlign: "center",
          fontWeight: "bold",
          backgroundColor: EVENT_TYPE_TO_COLOR[eventType],
        }}
        // onClick={click}
        // onClick={(e) => {
        //   const currentEventTimeStamp = e.timeStamp;
        //   console.log(`currentEventTimeStamp--------${currentEventTimeStamp}`);

        //   const preTimeStamp = onClickPreTimeStamp.current;
        //   onClickPreTimeStamp.current = currentEventTimeStamp;

        //   if (typeof preTimeStamp === "number") {
        //     const result = currentEventTimeStamp - preTimeStamp;
        //     console.log(`result========${result}`);
        //     if (result < 200) {
        //       return;
        //     }
        //   }

        //   handleEvent("div", e.type);
        //   // onClickPreTimeStamp.current = e.timeStamp;
        // }}
        // onDoubleClick={(e) => {
        //   handleEvent("div", e.type);
        // }}

        onClick={onDivClick}
        onDoubleClick={onDivDoubleClick}
        // onClick={(e) => {
        //   clearTimer();

        //   if (e.detail === 1) {
        //     const newTimeoutId = setTimeout(() => {
        //       handleEvent("div", e.type);
        //       // console.log("-----onClick");
        //     }, 200);

        //     timeoutIdRef.current = newTimeoutId;
        //   }

        //   // e.preventDefault();
        //   // e.stopPropagation();
        // }}
        // onDoubleClick={(e) => {
        //   clearTimer();

        //   handleEvent("div", e.type);
        //   // console.log("-----onDoubleClick");
        // }}
      >
        TestH5
      </div>

      <div
        style={{
          height: "15%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          columnGap: "40px",
        }}
      >
        <img
          src={LakersLogo}
          alt="LakersLogo"
          width={100}
          height={100}
          draggable
          onDragStart={(e) => {
            setDragSource(LakersLogo);
            // e.dataTransfer.setDragImage(toImage(Food)!, 0, 0);
          }}
          // onTouchStart={() => {
          //   console.log("img------onTouchStart");
          //   setDragSource(LakersLogo);
          // }}
        />

        <img
          src={Food}
          alt="Food"
          width={100}
          height={100}
          draggable
          onDragStart={() => {
            setDragSource(Food);
          }}
        />
      </div>

      <div
        ref={konvaContainerRef}
        style={{
          height: "30%",
          border: "1px solid grey",
          overflow: "hidden",
        }}
      >
        <Konva
          width={konva.width}
          height={konva.height}
          dragSourceSrc={konva.dragSourceSrc}
          displayStars
        />
      </div>
    </div>
  );
  // #endregion render functions end
};

export { TestH5 };
