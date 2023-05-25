import { StrictMode } from "react";
import { createRoot, Root } from "react-dom/client";

import {
  QiankunProps,
  qiankunWindow,
  renderWithQiankun,
} from "vite-plugin-qiankun/dist/helper";

import { AppRoot } from "./AppRoot";
import "./main.css";

let root: Root | undefined = undefined;

const render = (props?: QiankunProps) => {
  const container = props?.container;

  const rootContainer = !!container
    ? container.querySelector("#zero-test-factory-root")
    : document.getElementById("zero-test-factory-root");

  root = createRoot(rootContainer as HTMLElement);

  root.render(
    <StrictMode>
      <AppRoot />
    </StrictMode>,
  );
};

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render();
}

// if (qiankunWindow.__POWERED_BY_QIANKUN__) {
renderWithQiankun({
  mount: (props) => {
    console.log("------mount");
    render(props);
  },
  bootstrap: () => {
    console.log("------bootstrap");
  },
  unmount: () => {
    console.log("------unmount");
    root?.unmount();
  },
  update: () => {
    console.log("------update");
  },
});
// }
