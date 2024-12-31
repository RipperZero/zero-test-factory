import { FC } from "react";

import { Button } from "antd";

import { HttpStatusCode } from "axios";

import { createAxiosInstance } from "@/shared/utils/createAxiosInstance";

const instance = createAxiosInstance({
  baseURL: "http://g08cnxdfxslsyu:8888/web-platform-server",
  // @see https://axios-http.com/docs/req_config
  validateStatus: (status: number) => {
    return status < HttpStatusCode.InternalServerError;
  },
});

type AxiosPageProps = unknown;

const AxiosPage: FC<AxiosPageProps> = () => {
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  const handleTrigger = () => {
    instance
      .post("/10106/token", undefined, {
        headers: {
          //   Authorization: "Basic V1MxMDY6V1MxMDY=",
          Authorization: "Basic V1MxMDY6MTIzNDU2",
        },
      })
      .then((res) => {
        console.log("handleTrigger then", res);
      })
      .catch((e) => {
        console.log("handleTrigger catch", e);
      });
  };
  // #endregion logic functions end

  // #region render functions start
  return (
    <div>
      <div>Test Axios</div>

      <Button onClick={handleTrigger}>Trigger</Button>
    </div>
  );
  // #endregion render functions end
};

export type { AxiosPageProps };
export { AxiosPage };
