const BORDER = {
  RADIUS_10: "10px",
  RADIUS_4: "4px",
} as const;

const COLOR = {
  BLUE_1: "#4874CE",
  BLUE_L1: "#C9DBFF",
  BLUE_L2: "#DDE8FF",
  BLUE_L3: "#F1F6FF",
  GRAY_1: "#E6E6E6",
  GRAY_2: "#F4F4F4",
  GRAY_3: "#F8F8F8",
  YELLOW_1: "#FFFECC",
  YELLOW_2: "#FFEF7A",
  WHITE: "#FFFFFF",
  LINE_GRAY_1: "#CCCCCC",
  LINE_GRAY_2: "#DDDDDD",
  LINE_GRAY_3: "#EEEEEE",
  LINE_BLUE_1: "#A2C1FF",
  LINE_BLUE_2: "#A4BAE6",
  LINE_BLUE_3: "#CFDCF5",
  TEXT_BLACK: "#000000",
  TEXT_BLACK_60: "rgba(0,0,0,0.6)",
  TEXT_BLACK_30: "rgba(0,0,0,0.3)",
  TEXT_BLUE_1: "#2A4C91",
  TEXT_BLUE_2: "#4874CE",
  TEXT_BLUE_L1: "#B6CEFB",
  ERROR_RED: "#CE0101",
  REQUIRED_RED: "#C90C1F",
  TEXT_WHITE: "#FFFFFF",
  ICON_BLUE: "#608ADD",
  ORANGE: "#CE6E00",
  ERROR_BG_RED: "#FADFE5",
} as const;

const BASE_FONT_FAMILY = "'Meiryo UI',sans-serif";

const BASE_FONT_SIZE = "14px";

const LINE_SPACING = "1.5em";

const FONT = {
  BASE: `${BASE_FONT_SIZE}/${LINE_SPACING} ${BASE_FONT_FAMILY}`,
  TITLE: `bold 16px/${LINE_SPACING} ${BASE_FONT_FAMILY}`,
  DIALOG_TITLE: `bold 18px/${LINE_SPACING} ${BASE_FONT_FAMILY}`,
} as const;

const FILTER = {
  // @see https://tailwindcss.com/docs/drop-shadow#customizing-your-theme
  // DROPSHADOW_1: "drop-shadow(0px 2px 6px rgba(0,0,0,0.3))",
  DROPSHADOW_1: "0px 2px 6px rgba(0, 0, 0, 0.3)",
} as const;

export {
  BORDER,
  COLOR,
  BASE_FONT_FAMILY,
  BASE_FONT_SIZE,
  LINE_SPACING,
  FONT,
  FILTER,
};
