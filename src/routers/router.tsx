import { createBrowserRouter } from "react-router";

import { getBaseURL } from "@/shared/utils/envUtils";
import GeneratedDesign from "@/test-factory/ai/Anima/GeneratedDesign";
import { LogisticsDashboard } from "@/test-factory/ai/BuilderIO/LogisticsDashboard";
import { Antd } from "@/test-factory/antd";
import { AxiosPage } from "@/test-factory/axios/AxiosPage";
import { ReactSpring } from "@/test-factory/react-spring";
import { Segment } from "@/test-factory/segment";
import { ShowPage } from "@/test-factory/show";
import { Tailwind } from "@/test-factory/tailwindcss";
import { UploadPage } from "@/test-factory/upload";

import { APP_PATHS } from "./APP_PATHS";

const router = createBrowserRouter(
  [
    { path: APP_PATHS.ROOT, element: <div>ROOT</div> },
    { path: APP_PATHS.TEMPLATE, element: <div>template</div> },
    { path: APP_PATHS.ANTD, element: <Antd /> },
    { path: APP_PATHS.SEGMENT, element: <Segment /> },
    {
      path: APP_PATHS.TAILWIND,
      element: <Tailwind />,
    },
    { path: APP_PATHS.REACTSPRING, element: <ReactSpring /> },
    { path: APP_PATHS.SHOW, element: <ShowPage /> },
    { path: APP_PATHS.UPLOAD, element: <UploadPage /> },

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
  ],
  {
    basename: getBaseURL(),
  },
);

export { router };
