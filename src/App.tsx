import { FC } from "react";
import { BrowserRouter } from "react-router-dom";

import { ConfigProvider } from "antd";

import { StyleProvider } from "@ant-design/cssinjs";
import { QueryClientProvider } from "@tanstack/react-query";
import { reactQueryClient } from "api";

import { ErrorBoundary } from "./ErrorBoundary";
import { Router } from "./Router";

const App: FC = () => {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={reactQueryClient}>
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
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export { App };
