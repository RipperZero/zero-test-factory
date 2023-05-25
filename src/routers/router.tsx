import { createBrowserRouter } from "react-router-dom";

import { APP_PATHS } from "routers";
import { getBaseURL } from "shared/utils/envUtils";
import { Antd } from "test-factory/antd";
import { ReactSpring } from "test-factory/react-spring";
import { Segment } from "test-factory/segment";
import { Tailwind } from "test-factory/tailwindcss";

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
  ],
  {
    basename: getBaseURL(),
  },
);

export { router };
