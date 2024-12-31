import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import mkcert from "vite-plugin-mkcert";
import progress from "vite-plugin-progress";
import tsconfigPaths from "vite-tsconfig-paths";

import { readFileSync } from "node:fs";
import { ServerOptions } from "node:https";
// import { resolve } from "node:path";
import picocolors from "picocolors";

const ENV_PREFIX = "ENV_";

// const httpsOptions: ServerOptions = {
//   pfx: readFileSync("cert/zeroKeystore.pfx"),
//   passphrase: "123456",
// };

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), ENV_PREFIX);
  const base = env.ENV_APP_BASE_URL;
  const { bold, green, cyan } = picocolors;

  return {
    plugins: [
      react(),
      tsconfigPaths(),
      progress({
        format: `${green(bold("Building"))} ${cyan("[:bar]")} :percent`,
      }),

      // @see https://github.com/liuweiGL/vite-plugin-mkcert
      // provide temp certificate(just in dev) to support for vite https development services
      // if an Axios request error is reported during startup
      // comment out this line and release[basicSsl()]'s comment to provide temp certificate
      // mkcert({ source: "coding" }),
      // @see https://vitejs.dev/config/server-options.html#server-https
      // basicSsl(),
    ],
    envPrefix: ENV_PREFIX,
    base: base,
    server: {
      port: 1234,
      host: true,
      cors: true,
      // https: httpsOptions,
    },
    resolve: {
      alias: {
        lodash: "lodash-es",
        // "@": resolve(__dirname, "./src"),
      },
    },
    build: {
      // outDir: "dist",
      rollupOptions: {
        output: {
          manualChunks: {
            react: ["react", "react-dom", "react-router"],
          },
          chunkFileNames: "assets/js/[name]-[hash].js",
          entryFileNames: "assets/js/[name]-[hash].js",
          assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
        },
      },
    },
  };
});
