import eslintJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  // Global ignores - equivalent to ignorePatterns in the old config
  {
    ignores: [
      "node_modules/",
      "dist/",
      "eslint.config.js", // Ignore this config file itself
      "jest.config.js",
      // .eslintrc.js will be ignored once renamed/deleted
    ],
  },

  // Base recommended rules from ESLint
  // Equivalent to 'extends: ["eslint:recommended"]'
  eslintJs.configs.recommended,

  // TypeScript specific configurations using recommended type-checked rules
  // Equivalent to parser, plugins, and 'extends: ["plugin:@typescript-eslint/recommended"]'
  // This requires parserOptions.project to be set correctly.
  ...tseslint.configs.recommendedTypeChecked,

  // Configure parserOptions for type-aware linting across TypeScript files
  {
    files: ["src/**/*.ts"], // Apply primarily to your source TS files
    languageOptions: {
      parserOptions: {
        project: true, // Automatically find tsconfig.json relative to tsconfigRootDir
        tsconfigRootDir: import.meta.dirname, // Set the root directory for tsconfig.json lookup
      },
    },
    // Add any specific rules for your TS files here if needed
    // rules: {
    //   '@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],
    // }
  },

  // Configuration to disable type-aware rules for JavaScript files (e.g., config files)
  // This prevents errors when linting JS files not part of the TypeScript project compilation.
  {
     files: ["**/*.js"], // Target JS files like jest.config.js, etc.
     extends: [tseslint.configs.disableTypeChecked],
  }
);
