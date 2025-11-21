import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  // Override default ignores of eslint-config-next.
  {
    rules: {
      "no-console": "warn",

      // TS Strictness
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "warn",
      // "@typescript-eslint/explicit-function-return-type": "warn",
      // "@typescript-eslint/no-non-null-assertion": "warn",
      // "@typescript-eslint/no-inferrable-types": "off",

      // // Type Import Style
      // "@typescript-eslint/consistent-type-imports": [
      //   "error",
      //   { prefer: "type-imports" },
      // ],

      // // Safety
      // "@typescript-eslint/no-unsafe-assignment": "warn",
      // "@typescript-eslint/no-unsafe-member-access": "warn",
      // "@typescript-eslint/no-unsafe-return": "warn",

      // // Code style
      // "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
      // "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
      // "@typescript-eslint/switch-exhaustiveness-check": "error",
    },
  },

  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
