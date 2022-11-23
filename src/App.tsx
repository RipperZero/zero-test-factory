import { FC } from "react";
import { BrowserRouter } from "react-router-dom";

import { ErrorBoundary } from "./ErrorBoundary";
import { Router } from "./Router";

const App: FC = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export { App };
