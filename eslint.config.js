import globals from "globals";
import pluginVue from "eslint-plugin-vue";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,vue}"] },
  { languageOptions: { globals: globals.browser } },
  ...pluginVue.configs["flat/essential"],
  ...prettierConfig,
  ...prettierPlugin,
];
