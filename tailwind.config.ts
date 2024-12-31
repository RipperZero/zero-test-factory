import type { Config } from "tailwindcss";

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  // important: true,
  // important: "#root",
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;

export default config;
