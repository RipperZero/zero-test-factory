import { defineConfig, loadEnv } from "vite";

import react from "@vitejs/plugin-react";
import { readFileSync } from "node:fs";
import { ServerOptions } from "node:https";
import mkcert from "vite-plugin-mkcert";
import tsconfigPaths from "vite-tsconfig-paths";

const ENV_PREFIX = "ENV_";

// const httpsOptions: ServerOptions = {
//   pfx: readFileSync("cert/zeroKeystore.pfx"),
//   passphrase: "123456",
// };

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), ENV_PREFIX);
  const base = env.ENV_APP_BASE_URL;

  return {
    plugins: [
      react(),
      tsconfigPaths(),

      // @see https://github.com/liuweiGL/vite-plugin-mkcert
      // provide temp certificate(just in dev) to support for vite https development services
      // if an Axios request error is reported during startup
      // comment out this line and release[basicSsl()]'s comment to provide temp certificate
      mkcert({ source: "coding" }),
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
  };
});
