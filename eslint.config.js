import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  pluginJs.configs.recommended,
  {
    languageOptions: {
      globals: {...globals.browser, ...globals.node, ...globals.jest},
      ecmaVersion: "latest",
    },
    rules: {
      semi: "error"
    }
  },
  {
    ignores: [
      'dist',
      'coverage'
    ]
  }
];