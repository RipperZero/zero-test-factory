import { ChangeEvent, FC, useRef, useState } from "react";

import { Button, Progress, Typography } from "antd";

import { createAxiosInstance } from "@/shared/utils/createAxiosInstance";

const axiosInstance = createAxiosInstance();

type UploadPageProps = {};

const UploadPage: FC<UploadPageProps> = () => {
  // #region hooks start
  const uploadInputRef = useRef<HTMLInputElement | null>(null);

  const [percent, setPercent] = useState<number>(0);
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  const handleUploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    console.log(fileList);

    if (!!fileList && fileList.length > 0) {
      const formData = new FormData();
      formData.set("file", fileList[0]);

      axiosInstance
        .post("upload", formData, {
          timeout: 0,
          onUploadProgress: (progressEvent) => {
            if (typeof progressEvent.total !== "number") {
              return;
            }

            const percentCompleted = Math.round(
              (progressEvent.loaded / progressEvent.total) * 100,
            );
            setPercent(percentCompleted);
          },
        })
        .then((res) => {
          console.log(res);
        });
    }
  };
  // #endregion logic functions end

  // #region render functions start
  return (
    <div className="flex flex-col gap-[8px]">
      <Typography.Title className="text-center">Upload</Typography.Title>

      <div className="flex min-h-[50vh] flex-col gap-[8px] p-4">
        <Button
          className="w-[100px]"
          type="primary"
          onClick={() => {
            if (!!uploadInputRef.current) {
              uploadInputRef.current.click();
            }
          }}
        >
          Upload
          <input
            ref={uploadInputRef}
            style={{
              display: "none",
            }}
            type="file"
            // accept="image/*"
            multiple
            onChange={handleUploadImage}
          />
        </Button>
        <Progress type="circle" percent={percent} />
      </div>
    </div>
  );
  // #endregion render functions end
};

export type { UploadPageProps };
export { UploadPage };
