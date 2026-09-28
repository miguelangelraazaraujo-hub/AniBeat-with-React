import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";

import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default defineConfig([
  {
    ignores: ["dist", "node_modules"],//borrar
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: {
      js,
      react, //borrar
      "react-hooks": reactHooks, //borrar
      "react-refresh": reactRefresh, //borrar
    },
    extends: ["js/recommended"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      ...reactHooks.configs['recommended-latest'].rules,
      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: true,
        },
      ],

      // Prueba 1: variables no utilizadas
      "no-unused-vars": "error",

      // Prueba 2: console.log
      "no-console": "error",

      // Prueba 3: dependencias de useEffect
      "react-hooks/exhaustive-deps": "error",

      // Prueba 4: validación de props
      "react/prop-types": "error",

      // Recomendable en React
      "react/react-in-jsx-scope": "off",
    },
  },
  pluginReact.configs.flat.recommended,
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"]
  },
  {
    files: ["**/*.json5"],
    plugins: { json },
    language: "json/json5",
    extends: ["json/recommended"]
  },
  {
    files: ["**/*.md"],
    plugins: { markdown },
    language: "markdown/commonmark",
    extends: ["markdown/recommended"]
  },
  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    extends: ["css/recommended"]
  },


]);
