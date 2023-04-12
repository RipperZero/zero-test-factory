import { FC } from "react";

import { Button, Space } from "antd";

const TestCapture: FC = () => {
  // #region render functions start
  return (
    <Space
      onClickCapture={(e) => {
        console.log("===========onClickCaptureonClickCapture");
        /* this runs first */
        console.log(e);
      }}
      onClick={() => {
        console.log("++++++++++++click buttonbuttonbuttonbutton");
      }}
    >
      <Button
        type="dashed"
        onClick={() => {
          console.log("click button A");
        }}
      >
        A
      </Button>
      <Button
        type="primary"
        onClick={(e) => {
          e.stopPropagation();
          console.log("click button B");
        }}
      >
        B
      </Button>
    </Space>
  );
  // #endregion render functions end
};

export { TestCapture };
