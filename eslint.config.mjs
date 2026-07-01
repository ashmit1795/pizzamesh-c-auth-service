// @ts-check

import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig([
    globalIgnores(["dist/**", "build/**", "coverage/**", "node_modules/**"]),
    {
        files: ["**/*.{js,ts}"],
        extends: [
            tseslint.configs.recommendedTypeChecked,
            ...tseslint.configs.recommended,
        ],
        languageOptions: {
            parserOptions: {
                projectService: true,
            },
        },
        rules: {
            // "no-console": "error", // Allow console statements for debugging
        },
    },
]);
