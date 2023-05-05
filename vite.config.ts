import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    // @see https://github.com/liuweiGL/vite-plugin-mkcert
    mkcert({
      source: "coding",
    }),
  ],
  server: {
    port: 3000,
    host: true,
    cors: true,
    https: true,
  },
});
