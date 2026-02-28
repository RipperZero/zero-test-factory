/* eslint-disable no-undef */

const ua = process.env.npm_config_user_agent || "";
const execpath = process.env.npm_execpath || "";
const pm = process.env.npm_config_user_agent?.split(" ")[0] || "";

// pnpm characteristics
const isPNPM =
  ua.includes("pnpm") || execpath.includes("pnpm") || pm.startsWith("pnpm");

// If it's not pnpm, block installation
if (!isPNPM) {
  console.error(`
❌ Installation blocked.
This project must be installed using pnpm only.

Detected:
  npm_execpath: ${execpath}
  npm_config_user_agent: ${ua}
`);
  process.exit(1);
}
