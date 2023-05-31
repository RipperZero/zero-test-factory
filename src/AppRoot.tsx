import { FC } from "react";
import { RouterProvider } from "react-router-dom";

import { StyleProvider } from "@ant-design/cssinjs";
import { QueryClientProvider } from "@tanstack/react-query";
import { App, ConfigProvider } from "antd";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { reactQueryClient } from "api";
import { router } from "routers";

// import VConsole from "vconsole";
import { ErrorBoundary } from "./ErrorBoundary";

// const vConsole = new VConsole();

const AppRoot: FC = () => {
  return (
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
  );
};

export { AppRoot };
