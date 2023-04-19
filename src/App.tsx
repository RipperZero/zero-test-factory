import { FC } from "react";
import { BrowserRouter } from "react-router-dom";

import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";

import { ErrorBoundary } from "./ErrorBoundary";
import { Router } from "./Router";

const App: FC = () => {
  return (
    <ErrorBoundary>
      <ConfigProvider
      // theme={{
      //   token: {
      //     colorPrimary: "#000000",
      //   },
      // }}
      >
        <StyleProvider hashPriority="high">
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </StyleProvider>
      </ConfigProvider>
    </ErrorBoundary>
  );
};

export { App };
