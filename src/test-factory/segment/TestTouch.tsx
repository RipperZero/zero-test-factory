import { FC } from "react";

const TestTouch: FC = () => {
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <div className=" h-screen w-screen ">
      <div
        className="h-1/2 bg-amber-400 text-center"
        // TouchEvent start
        onTouchStart={() => {
          // alert("TouchEvent-----------Start");
          console.log("TouchEvent-----------Start");
        }}
        onTouchMove={() => {
          console.log("TouchEvent-----------Move");
        }}
        onTouchEnd={() => {
          // alert("TouchEvent-----------End");
          console.log("TouchEvent-----------End");
        }}
        onTouchCancel={() => {
          console.log("TouchEvent-----------Cancel");
        }}
        // TouchEvent end

        // MouseEvent start
        onClick={() => {
          alert("MouseEvent-----------Click");
          console.log("MouseEvent-----------Click");
        }}
        onMouseEnter={() => {
          console.log("MouseEvent-----------Enter");
        }}
        onMouseOver={() => {
          console.log("MouseEvent-----------Over");
        }}
        onMouseDown={() => {
          console.log("MouseEvent-----------Down");
        }}
        onMouseUp={() => {
          console.log("MouseEvent-----------Up");
        }}
        onMouseLeave={() => {
          console.log("MouseEvent-----------Leave");
        }}
        // MouseEvent end
      >
        TestTouch
      </div>
    </div>
  );
  // #endregion render functions end
};

export { TestTouch };
