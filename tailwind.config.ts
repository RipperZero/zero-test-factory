// import tailwindScrollbar from "tailwind-scrollbar";
import chroma from "chroma-js";
import type { Config } from "tailwindcss";

import {
  BASE_FONT_FAMILY,
  BORDER,
  COLOR,
  FILTER,
  FONT,
} from "./lib/atomStyles";

// const CUSTOM_THEME_CONFIG = {
//   bgGradientDeg: {
//     360: "360deg",
//   },
// };

// type CustomThemeConfigKey = keyof typeof CUSTOM_THEME_CONFIG;

// @ts-expect-error:next-line
// @see https://tailwindcss.com/docs/plugins#static-utilities
const customClassName: PluginFn = ({ addUtilities }) => {
  addUtilities({
    ".FONT-BASE": {
      font: FONT.BASE,
    },
    ".FONT-TITLE": {
      font: FONT.TITLE,
    },
    ".FONT-DIALOG-TITLE": {
      font: FONT.DIALOG_TITLE,
    },
    ".hopeCheckbox-svg": {
      // key is var in svg
      "--checkbox-color": COLOR.ICON_BLUE,
      "--checkbox-border-color": COLOR.LINE_BLUE_1,
      "--checkbox-background-color": COLOR.WHITE,
    },
    ".hopeCheckbox-disabled-svg": {
      // key is var in svg
      "--checkbox-color": chroma(COLOR.ICON_BLUE).alpha(0.3).css(),
      "--checkbox-border-color": chroma(COLOR.LINE_BLUE_1).alpha(0.3).css(),
    },
    ".hopeRadio-svg": {
      // key is var in svg
      "--radio-color": COLOR.ICON_BLUE,
      "--radio-border-color": COLOR.LINE_BLUE_1,
      "--radio-background-color": COLOR.WHITE,
    },
    ".hopeRadio-disabled-svg": {
      // key is var in svg
      "--radio-color": chroma(COLOR.ICON_BLUE).alpha(0.3).css(),
      "--radio-border-color": chroma(COLOR.LINE_BLUE_1).alpha(0.3).css(),
    },
    ".raw-transition-none": {
      transition: "none",
    },
    ".safe-min-h-dvh": {
      // key is var in main.css
      // Defaults to `100vh` if `--viewport-height` is not set
      minHeight: "var(--viewport-height, 100vh)",
    },

    // hide native password reveal and clear icons in Edge/IE
    // @see https://blog.csdn.net/qq_41872385/article/details/130850917
    "input[type='password'].hide-input-password-icon": {
      "&::-ms-reveal": {
        display: "none",
      },
      "&::-ms-clear": {
        display: "none",
      },
    },

    // remove input background color for chrome autocomplete
    // @see https://stackoverflow.com/questions/2781549/removing-input-background-colour-for-chrome-autocomplete
    "input:-webkit-autofill.hide-input-autocomplete-background": {
      "-webkit-background-clip": "text",
      "&:hover": {
        "-webkit-background-clip": "text",
      },
    },
  });
};

// @see https://stackoverflow.com/questions/71120394/is-there-a-way-to-adjust-the-angle-of-the-linear-gradient-in-tailwind-css
// const customThemeConfig: PluginFn = ({ matchUtilities, theme }) => {
//   matchUtilities(
//     {
//       "bg-gradient-to": (angle: string) => ({
//         "background-image": `linear-gradient(${angle}, var(--tw-gradient-stops))`,
//       }),
//     },
//     {
//       values: Object.assign(
//         theme("bgGradientDeg" as CustomThemeConfigKey, {}),
//         {
//           10: "10deg", // bg-gradient-10
//         },
//       ),
//     },
//   );
// };

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  // important: true,
  // important: "#rx-touch-mobile-root",
  theme: {
    extend: {
      borderRadius: {
        ...BORDER,
      },
      colors: {
        ...COLOR,
      },
      fontFamily: {
        base: BASE_FONT_FAMILY,
      },
      dropShadow: {
        ...FILTER,
      },

      screens: {
        "h5-xs": "320px",
        "h5-sm": "360px",
        "h5-md": "414px",
        "h5-lg": "480px",
      },

      // #region custom user configuration ---start
      // ...CUSTOM_THEME_CONFIG,
      // #endregion custom user configuration ---end
    },
  },
  // TODO
  // corePlugins: {
  //   // Remove the Tailwind CSS preflight styles so it can use Material UI's preflight instead (CssBaseline).
  //   preflight: false,
  // },
  plugins: [customClassName],
} satisfies Config;

export default config;
