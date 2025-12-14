import { FC } from "react";
import { RouterProvider } from "react-router/dom";

import { App, ConfigProvider } from "antd";

// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ClickToComponent } from "click-to-react-component";

import { StyleProvider } from "@ant-design/cssinjs";
import { ApolloProvider } from "@apollo/client/react";
import { QueryClientProvider } from "@tanstack/react-query";

import { reactQueryClient } from "./api";
// import VConsole from "vconsole";
import { ErrorBoundary } from "./ErrorBoundary";
import { client } from "./graphQL/apolloClient";
import { router } from "./routers";

// const vConsole = new VConsole();

const AppRoot: FC = () => {
  return (
    <>
      <ClickToComponent />

      <ErrorBoundary>
        <ApolloProvider client={client}>
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
        </ApolloProvider>
      </ErrorBoundary>
    </>
  );
};

export { AppRoot };
