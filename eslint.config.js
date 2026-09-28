import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: [
      "dist/**",
      "node_modules/**",
      "package-lock.json",
      "package.json",
      "public/**",
      "README.md",
      "vite.config.js",
    ],
  },
  {
    files: ["src/**/*.{js,jsx}"],
    extends: [
      react.configs.flat.recommended,
    ],
    plugins: {
      react,
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: { ...globals.browser, ...globals.node }
    },
    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      ...js.configs.recommended.rules,
      // Prueba 1: variables no utilizadas
      "no-unused-vars": "error",

      // Prueba 2: console.log
      "no-console": "error",

      // Prueba 3: JSX no definido
      "react/jsx-no-undef": "error",

      // Prueba 4: validación de props
      "react/prop-types": "error",

      // Prueba 5: comparaciones estrictas
      "eqeqeq": "error",

      // Recomendable en React
      "react/react-in-jsx-scope": "off",
    },
  },
]);
