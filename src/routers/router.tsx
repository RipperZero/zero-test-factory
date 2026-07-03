import { createBrowserRouter } from "react-router";

import { getBaseURL } from "@/shared/utils/envUtils";
import GeneratedDesign from "@/test-factory/ai/Anima/GeneratedDesign";
import { LogisticsDashboard } from "@/test-factory/ai/BuilderIO/LogisticsDashboard";
import { Antd } from "@/test-factory/antd";
import { AxiosPage } from "@/test-factory/axios/AxiosPage";
import { Context } from "@/test-factory/context/Context";
import { GraphQL } from "@/test-factory/graphQL/GraphQL";
import { GraphiQLPage } from "@/test-factory/graphQL/GraphiQLPage";
import { ReactSpring } from "@/test-factory/react-spring";
import { Segment } from "@/test-factory/segment";
import { ShowPage } from "@/test-factory/show";
import { Tailwind } from "@/test-factory/tailwindcss";
import { UploadPage } from "@/test-factory/upload";

import { APP_PATHS } from "./APP_PATHS";
import { PretextPage } from "@/test-factory/pretext/PretextPage";
import { PretextCosmicPage } from "@/test-factory/pretext-cosmic/PretextCosmicPage";

const router = createBrowserRouter(
  [
    // { path: APP_PATHS.ROOT, element: <div>ROOT</div> },
    { path: APP_PATHS.ROOT, element: <PretextCosmicPage /> },
    { path: APP_PATHS.TEMPLATE, element: <div>template</div> },
    { path: APP_PATHS.ANTD, element: <Antd /> },
    { path: APP_PATHS.SEGMENT, element: <Segment /> },
    {
      path: APP_PATHS.TAILWIND,
      element: <Tailwind />,
    },
    { path: APP_PATHS.REACT_SPRING, element: <ReactSpring /> },
    { path: APP_PATHS.SHOW, element: <ShowPage /> },
    { path: APP_PATHS.PRETEXT, element: <PretextPage /> },
    { path: APP_PATHS.PRETEXT_COSMIC, element: <PretextCosmicPage /> },
    { path: APP_PATHS.UPLOAD, element: <UploadPage /> },
    { path: APP_PATHS.GRAPH_QL, element: <GraphQL /> },
    { path: APP_PATHS.GRAPHI_QL, element: <GraphiQLPage /> },

    {
      path: "/axios",
      element: <AxiosPage />,
    },
    {
      path: "/builder.io",
      element: <LogisticsDashboard />,
    },
    {
      path: "/anima",
      element: <GeneratedDesign />,
    },
    {
      path: "/context",
      element: <Context />,
    },
  ],
  {
    basename: getBaseURL(),
  },
);

export { router };
