import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { Image, Layer, Stage, Star, Text } from "react-konva";

import { produce } from "immer";
import KonvaNamespace from "konva";
import { KonvaEventObject } from "konva/lib/Node";
import { polyfill } from "mobile-drag-drop";
import { scrollBehaviourDragImageTranslateOverride } from "mobile-drag-drop/scroll-behaviour";

import { useHandleTap } from "./hook/useHandleTap";
import { toImage } from "./tools/ToolUtils";

polyfill({
  dragImageTranslateOverride: scrollBehaviourDragImageTranslateOverride,
});

const generateShapes = (width: number, height: number) => {
  return Array.from({ length: 10 }).map<StarInfo>((_, index) => {
    const idStr = index.toString();
    const randomNum = Math.random();

    return {
      id: idStr,
      name: `star_${idStr}`,
      x: randomNum * width,
      y: randomNum * height,
      rotation: randomNum * 180,
      isDragging: false,
    };
  });
};

type StarInfo = {
  id: string;
  name: string;
  x: number;
  y: number;
  rotation: number;
  isDragging: boolean;
};

type ImageInfo = {
  id: string;
  name: string;
  image: HTMLImageElement;
  x: number;
  y: number;
  width: number;
  height: number;
  isDragging: boolean;
};

type KonvaProps = {
  width: number;
  height: number;
  dragSourceSrc?: string | null;
  displayStars?: boolean;
};

const Konva: FC<KonvaProps> = ({
  width,
  height,
  dragSourceSrc,
  displayStars = false,
}) => {
  // #region hooks start
  const [stars, setStars] = useState<StarInfo[]>([]);

  const [imageInfos, setImageInfos] = useState<ImageInfo[]>([]);

  const stageReF = useRef<KonvaNamespace.Stage | null>(null);

  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

  const { onTap, onDblTap } = useHandleTap(
    (e) => {
      console.log("Image onTap");
      console.log(e.target.name());
    },
    (e) => {
      console.log("Image onDblTap");
      console.log(e.target.name());
    },
  );
  // #endregion hooks end

  // #region useEffect functions start
  useEffect(() => {
    if (displayStars) {
      setStars(generateShapes(width, height));
    }
  }, [displayStars, height, width]);

  useEffect(() => {
    clearTimer();
  }, []);
  // #endregion useEffect functions end

  // #region logic functions start
  const clearTimer = () => {
    if (!!timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }
  };

  const handleDrag = <S extends { id: string; isDragging: boolean }>(
    e: KonvaEventObject<DragEvent>,
    setState: Dispatch<SetStateAction<S[]>>,
    dragType: "start" | "end",
  ) => {
    const id = e.target.id();

    setState(
      produce((draft) => {
        const foundState = draft.find((draftState) => draftState.id === id);

        if (foundState === undefined) {
          return;
        }

        if (dragType === "start") {
          foundState.isDragging = true;
        }

        if (dragType === "end") {
          foundState.isDragging = false;
        }
      }),
    );
  };

  const handleStarDragStart = (e: KonvaEventObject<DragEvent>) => {
    handleDrag(e, setStars, "start");
  };

  const handleStarDragEnd = (e: KonvaEventObject<DragEvent>) => {
    handleDrag(e, setStars, "end");
  };

  const handleImageDragStart = (e: KonvaEventObject<DragEvent>) => {
    handleDrag(e, setImageInfos, "start");
  };

  const handleImageDragEnd = (e: KonvaEventObject<DragEvent>) => {
    handleDrag(e, setImageInfos, "end");
  };

  const handleMouseEnter = (e: KonvaEventObject<MouseEvent>) => {
    console.log("=====handleMouseEnter");
    console.log(`target id -----${e.target.id()}`);
    console.log(`target name -----${e.target.name()}`);
    console.log(`currentTarget id -----${e.currentTarget.id()}`);
    console.log(`currentTarget name -----${e.currentTarget.name()}`);
  };

  const handleTouchEnd = (e: KonvaEventObject<TouchEvent>) => {
    console.log("=====handleTouchEnd");
    console.log(`target id -----${e.target.id()}`);
    console.log(`target name -----${e.target.name()}`);
    console.log(`currentTarget id -----${e.currentTarget.id()}`);
    console.log(`currentTarget name -----${e.currentTarget.name()}`);
    // console.log(e);
  };
  // #endregion logic functions end

  // const { run: handleDblTap } = useDebounceFn(
  //   () => {
  //     clearTimer();

  //     console.log("Image onDblTap");
  //   },
  //   { wait: TAP_DELAY - 50 },
  // );

  // #region render functions start
  return (
    <div
      onContextMenu={(e) => {
        console.log("ScrollList------ onContextMenu");
        // console.log(e.target);
        // console.log(e.currentTarget);
        e.stopPropagation();
        e.preventDefault();
      }}
      onClick={() => {
        console.log("ScrollList------ onClick");
      }}
      // onTouchEnd={(e) => {
      //   console.log("ScrollList++++++ onTouchEnd");
      //   // console.log(e);
      // }}
    >
      <div
        // style={{ width: width, height: height }}
        onDrop={(e) => {
          if (typeof dragSourceSrc !== "string" || stageReF.current === null) {
            return;
          }

          // prevent default action (open as link for some elements)
          e.preventDefault();

          // register event position
          stageReF.current.setPointersPositions(e);
          // get image position
          const imagePosition = stageReF.current.getPointerPosition();

          const image = toImage(dragSourceSrc, 100, 100);

          if (imagePosition === null || image === undefined) {
            return;
          }

          setImageInfos(
            produce((draft) => {
              const idNum = draft.length + 1;
              const idStr = idNum.toString();

              const imageInfo: ImageInfo = {
                id: idStr,
                name: `image_${idStr}`,
                image: image,
                x: imagePosition.x,
                y: imagePosition.y,
                width: image.width,
                height: image.height,
                isDragging: false,
              };

              // @ts-ignore:next-line
              draft.push(imageInfo);
            }),
          );
        }}
        // @see
        // https://github.com/timruffles/mobile-drag-drop#polyfill-requires-dragenter-listener
        // Polyfill requires dragenter listener
        onDragEnter={(e) => {
          // If a handler is set up it has to call event.preventDefault() to allow dropping.
          e.preventDefault();
        }}
        onDragOver={(e) => {
          // prevent default to allow drop
          e.preventDefault();
        }}
        // onClick={() => {
        //   console.log("ListItem------ onClick");
        // }}
        // onTouchEnd={(e) => {
        //   console.log("ListItem++++++ onTouchEnd");
        //   // console.log(e);
        // }}
      >
        <Stage
          ref={stageReF}
          width={width}
          height={height}
          // onContextMenu={(e) => {
          //   console.log("Stage------ onContextMenu");
          //   console.log(e.target);
          //   console.log(e.currentTarget);
          //   e.evt.stopPropagation();
          //   e.evt.preventDefault();
          // }}
          // Stage MouseEvent(H5) not support in
          // konva 7.2.5 react-konva 17.0.1-3
          onClick={() => {
            console.log("Stage------ onClick");
          }}
          onMouseDown={() => {
            console.log("Stage------ onMouseDown");
          }}
          onMouseUp={() => {
            console.log("Stage------ onMouseUp");
          }}
          onMouseLeave={() => {
            console.log("Stage------ onMouseLeave");
          }}
          // onTouchEnd={(e: KonvaEventObject<TouchEvent>) => {
          //   console.log("Stage++++++ onTouchEnd");
          //   console.log(`target id -----${e.target.id()}`);
          //   console.log(`target name -----${e.target.name()}`);
          //   console.log(`currentTarget id -----${e.currentTarget.id()}`);
          //   console.log(`currentTarget name -----${e.currentTarget.name()}`);
          //   // console.log(e);
          // }}
        >
          <Layer>
            <Text text="Draggable" fill="red" fontSize={20} />
            {stars.map((star) => {
              return (
                <Star
                  key={star.id}
                  id={star.id}
                  name={star.name}
                  x={star.x}
                  y={star.y}
                  numPoints={5}
                  innerRadius={20}
                  outerRadius={40}
                  fill={star.isDragging ? "green" : "#89b717"}
                  opacity={0.8}
                  rotation={star.rotation}
                  shadowColor="black"
                  shadowBlur={10}
                  shadowOpacity={0.6}
                  shadowOffsetX={star.isDragging ? 10 : 5}
                  shadowOffsetY={star.isDragging ? 10 : 5}
                  scaleX={star.isDragging ? 1.2 : 1}
                  scaleY={star.isDragging ? 1.2 : 1}
                  draggable
                  onDragStart={handleStarDragStart}
                  onDragEnd={handleStarDragEnd}
                  // onMouseEnter={handleMouseEnter}
                  // onTouchEnd={handleTouchEnd}
                />
              );
            })}
            {imageInfos.map((imageInfo) => {
              return (
                <Image
                  key={imageInfo.id}
                  id={imageInfo.id}
                  name={imageInfo.name}
                  image={imageInfo.image}
                  x={imageInfo.x}
                  y={imageInfo.y}
                  // use offset to set origin to the center of the image
                  offsetX={imageInfo.width / 2}
                  offsetY={imageInfo.height / 2}
                  shadowEnabled={imageInfo.isDragging}
                  shadowColor="black"
                  shadowBlur={10}
                  shadowOpacity={0.6}
                  shadowOffsetX={10}
                  shadowOffsetY={10}
                  draggable
                  onDragStart={handleImageDragStart}
                  onDragEnd={handleImageDragEnd}
                  // onMouseEnter={handleMouseEnter}
                  // onTouchEnd={handleTouchEnd}

                  onTap={onTap}
                  onDblTap={onDblTap}
                  onTouchStart={() => {
                    console.log("Image------ onTouchStart");
                  }}
                  onTouchEnd={() => {
                    console.log("Image------ onTouchEnd");
                  }}
                  onClick={() => {
                    console.log("Image------ onClick");
                  }}
                  onMouseDown={() => {
                    console.log("Image------ onMouseDown");
                  }}
                  onMouseUp={() => {
                    console.log("Image------ onMouseUp");
                  }}
                  onMouseLeave={() => {
                    console.log("Image------ onMouseLeave");
                  }}
                />
              );
            })}
          </Layer>
        </Stage>
      </div>
    </div>
  );
  // #endregion render functions end
};

export { Konva };
