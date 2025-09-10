// @ts-check

import globals from 'globals';
import eslintJs from '@eslint/js';
import typescriptEslint from 'typescript-eslint';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import eslintPluginVitest from '@vitest/eslint-plugin';
// @ts-expect-error Missing types from libs
import eslintPluginTailwindcss from 'eslint-plugin-tailwindcss';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig(
  globalIgnores(['.tanstack/**', '.nitro/**', '.output/**', 'coverage/**', '**/*.gen.ts', '**/*.d.ts']),
  eslintJs.configs.recommended,
  typescriptEslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [eslintPluginImport.flatConfigs.recommended, eslintPluginImport.flatConfigs.typescript],
    settings: {
      'import/resolver': {
        node: true,
        typescript: {},
      },
    },
    rules: {
      'import/order': [
        'error',
        {
          'groups': ['builtin', 'external', 'internal', ['parent', 'sibling', 'index'], 'object', 'type'],
          'pathGroups': [
            {
              pattern: '@/**',
              group: 'internal',
              position: 'after',
            },
          ],
          'newlines-between': 'never',
          'alphabetize': {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
  eslintPluginUnicorn.configs.recommended,
  {
    files: ['**/*.test.*'],
    plugins: {
      // @ts-expect-error Works as expected and is aligned with vitest docs
      vitest: eslintPluginVitest,
    },
    rules: {
      ...eslintPluginVitest.configs.recommended.rules,
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-member-access
  ...eslintPluginTailwindcss.configs['flat/recommended'],
  eslintPluginPrettierRecommended,
);
