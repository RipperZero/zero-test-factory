import { FC } from "react";
import { RouterProvider } from "react-router/dom";

import { App, ConfigProvider } from "antd";

// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ClickToComponent } from "click-to-react-component";

import { StyleProvider } from "@ant-design/cssinjs";
import { QueryClientProvider } from "@tanstack/react-query";

import { reactQueryClient } from "./api";
// import VConsole from "vconsole";
import { ErrorBoundary } from "./ErrorBoundary";
import { router } from "./routers";

// const vConsole = new VConsole();

const AppRoot: FC = () => {
  return (
    <>
      <ClickToComponent />

      <ErrorBoundary>
        <QueryClientProvider client={reactQueryClient}>
          {/* <ReactQueryDevtools /> */}
          <ConfigProvider
          // theme={{
          //   token: {
          //     colorPrimary: "#000000",
          //   },
          // }}
          >
            <StyleProvider hashPriority="high">
              <App>
                <RouterProvider router={router} />
              </App>
            </StyleProvider>
          </ConfigProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </>
  );
};

export { AppRoot };
