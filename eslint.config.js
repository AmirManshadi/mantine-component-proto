import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
	globalIgnores(["dist", ".stylelintrc.js", "eslint.config.js", "postcss.config.cjs", "tailwind.config.js", "vite.config.ts"]),
	{
		files: ["**/*.{ts,tsx}"],
		ignores: ["**/*.{mjs,cjs,js,d.ts,d.mts}"],
		extends: [
			js.configs.recommended,
			...tseslint.configs.recommended,
			reactHooks.configs["recommended-latest"],
			reactRefresh.configs.vite
		],
		languageOptions: {
			ecmaVersion: 2020,
			sourceType: "module",
			globals: globals.browser,
			parser: tseslint.parser,
			parserOptions: {
				ecmaFeatures: {
					jsx: true
				}
			}
		},
		rules: {
			"react-refresh/only-export-components": [
				"warn",
				{ allowConstantExport: true }
			]
		}
	}
]);
