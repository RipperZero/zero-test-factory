import type { FC } from "react";

import { Typography } from "antd";

import { explorerPlugin } from "@graphiql/plugin-explorer";
import { createGraphiQLFetcher } from "@graphiql/toolkit";
import { GraphiQL, HISTORY_PLUGIN } from "graphiql";

import "graphiql/style.css";
import "@graphiql/plugin-explorer/style.css";

type GraphiQLPageProps = unknown;

const authorizationToken = "Bearer fb427c1ae974883fb06afbc6c8-6654dcaf33c7e";

const graphqlEndpoint =
  "https://10.168.3.140:8443/web-platform-server/10201/karte";
  // "http://10.168.3.140:9993/web-platform-server/10201/karte";

const fetcher = createGraphiQLFetcher({
  url: graphqlEndpoint,
  fetch: (input, init) => {
    const headers = new Headers(init?.headers);

    headers.set("authorization", authorizationToken);

    return fetch(input, {
      ...init,
      credentials: "include",
      headers,
    });
  },
});

const plugins = [HISTORY_PLUGIN, explorerPlugin()];

const GraphiQLPage: FC<GraphiQLPageProps> = () => {
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <div
      style={{
        height: "100dvh",
        display: "grid",
        gridTemplateRows: "auto 1fr",
      }}
    >
      <div style={{ padding: 12, borderBottom: "1px solid #f0f0f0" }}>
        <Typography.Text type="secondary">
          {`Endpoint: ${graphqlEndpoint}`}
        </Typography.Text>
      </div>

      <GraphiQL
        fetcher={fetcher}
        plugins={plugins}
        defaultEditorToolsVisibility
      />
    </div>
  );
  // #endregion render functions end
};

export type { GraphiQLPageProps };
export { GraphiQLPage };
