// import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react-vite";

const preview: Preview = {
  parameters: {
    // Optional parameter to center the component in the Canvas
    // More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

const decorators = [
  // withThemeByClassName({
  //   themes: {
  //     light: "",
  //     dark: "dark",
  //   },
  //   defaultTheme: "light",
  // }),
];

export { decorators, preview };
