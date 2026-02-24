import react from "@vitejs/plugin-react-swc";
import { defineConfig, loadEnv } from "vite";
import mkcert from "vite-plugin-mkcert";
import progress from "vite-plugin-progress";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

import { codeInspectorPlugin } from "code-inspector-plugin";
// import { readFileSync } from "node:fs";
// import { ServerOptions } from "node:https";
import { resolve } from "node:path";
import picocolors from "picocolors";

import tailwindcss from "@tailwindcss/vite";

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
      codeInspectorPlugin({
        bundler: "vite",
      }),
      react(),
      tailwindcss(),
      tsconfigPaths(),
      svgr({
        include: "src/**/*.svg",
      }),
      progress({
        format: `${green(bold("Building"))} ${cyan("[:bar]")} :percent`,
      }),

      // @see https://github.com/liuweiGL/vite-plugin-mkcert
      // provide temp certificate(just in dev) to support for vite https development services
      // if an Axios request error is reported during startup
      // comment out this line and release[basicSsl()]'s comment to provide temp certificate
      mkcert({ source: "coding" }),
      // @see https://vitejs.dev/config/server-options.html#server-https
      // basicSsl(),
    ],
    optimizeDeps: {
      include: [
        "@ant-design/cssinjs",
        "antd",
        "dayjs",
        "clsx",
        "immer",
        "large-small-dynamic-viewport-units-polyfill",
        "radash",
        "react",
        "react-dom",
        "react-router",
        "tailwindcss",
        "tailwind-merge",
      ],
    },
    envPrefix: ENV_PREFIX,
    base: base,
    server: {
      port: 1234,
      host: true,
      cors: true,
      allowedHosts: true,
      // https: httpsOptions,
    },
    resolve: {
      alias: {
        lodash: "lodash-es",
        // file path mapping has been configured in [tsconfig.app.json]'s paths.
        // this is to support using [@] imports in CSS files.
        "@": resolve(__dirname, "src"),
      },
    },
    build: {
      // outDir: "dist",
      // sourcemap: true,
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
