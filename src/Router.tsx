import { FC } from "react";
import { Routes, Route } from "react-router-dom";

import { APP_PATHS } from "@common/config";

export const Router: FC = () => {
  return (
    <Routes>
      <Route path={APP_PATHS.ROOT} element={<div>root</div>} />
      <Route path={APP_PATHS.TEMPLATE} element={<div>template</div>} />
    </Routes>
  );
};
