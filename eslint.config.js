import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";
import mantine from "eslint-config-mantine";

export default defineConfig([
	globalIgnores(["dist"]),
	{
		...mantine,
		files: ["**/*.{ts,tsx}"],
		ignores: ["**/*.{mjs,cjs,js,d.ts,d.mts}"],
		extends: [
			js.configs.recommended,
			tseslint.configs.recommended,
			reactHooks.configs["recommended-latest"],
			reactRefresh.configs.vite
		],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser
		}
	}
]);
