// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import configPrettier from "eslint-config-prettier";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

import js from "@eslint/js";

export default defineConfig(
  configPrettier,
  { ignores: ["dist", "node_modules", "vite.config.mts"] },
  {
    // files: ["**/*.{js,jsx,ts,tsx}"],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      // Use the automatic JSX runtime preset from eslint-plugin-react
      react.configs.flat["jsx-runtime"],
    ],
    languageOptions: {
      ecmaVersion: 2020,
      parserOptions: {
        ecmaFeatures: {
          // Enable JSX parsing so ESLint can parse <Component /> syntax
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        // Tell ESLint React is globally available (for automatic JSX runtime)
        React: "readonly",
        // Tell ESLint NodeJS is globally available
        NodeJS: "readonly",
      },
    },
    plugins: {
      react: react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,

      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
        },
      ],

      "no-restricted-imports": [
        "error",
        {
          patterns: [{ regex: "^@mui/[^/]+$" }],
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "no-extra-boolean-cast": "off",
      "no-empty": "warn",
      "no-undef": "error",
      "no-irregular-whitespace": "warn",
      "no-useless-assignment": "off",
    },
  },
);
