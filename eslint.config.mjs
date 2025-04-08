// @ts-check
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";
import jsxA11y from "eslint-plugin-jsx-a11y";

import { includeIgnoreFile } from "@eslint/compat";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");

export default tseslint.config(
	eslint.configs.recommended,
	tseslint.configs.strict,
	includeIgnoreFile(gitignorePath),
	...eslintPluginAstro.configs["flat/recommended"],
	jsxA11y.flatConfigs.strict,
	{
		rules: {
			"no-undef": "off",
		},
	},
);
