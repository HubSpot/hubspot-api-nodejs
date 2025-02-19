import globals from "globals";
import importPlugin from 'eslint-plugin-import';
import eslint from '@eslint/js';
import eslintConfigPrettier from "eslint-config-prettier";
import nodePlugin from 'eslint-plugin-n';
import tsParser from '@typescript-eslint/parser';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  eslintConfigPrettier,
  nodePlugin.configs['flat/recommended'],
  {
    languageOptions: {
      globals: globals.node,
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          modules: true
        },
        ecmaVersion: 'latest',
        project: './tsconfig.json',
      },
    },
  },
  {
    settings: {
      'import/resolver': {
        typescript: true,
        node: true
      }
    }
  },
  {
    ignores: ["codegen/", "lib/"]
  },
  {
    rules: {
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "n/no-missing-import": "off",
      "n/no-missing-require": "off",
      "import/order": ["error", {
        "groups": [
          "builtin", "external", "internal", "parent","sibling", "index", "type"
        ],
      }],
    }
  }
);
