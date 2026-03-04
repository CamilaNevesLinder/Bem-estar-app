import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import _import from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends('expo', 'prettier'),
  eslintPluginPrettierRecommended,
  {
    plugins: {
      prettier,
      import: _import,
      react: eslintPluginReact,
    },

    languageOptions: {
      globals: {
        ...globals.node,
      },

      parser: tsParser,
    },

    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
    },

    rules: {
      ...eslintPluginReactHooks.configs.recommended.rules,
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],

      'comma-dangle': ['error', 'always-multiline'],
      semi: 'error',

      'sort-imports': [
        'error',
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
        },
      ],

      'import/order': [
        'error',
        {
          groups: [
            ['external', 'builtin'],
            'internal',
            ['sibling', 'parent'],
            'index',
          ],

          pathGroups: [
            {
              pattern: '@(react|react-native)',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@src/**',
              group: 'internal',
            },
          ],

          pathGroupsExcludedImportTypes: ['internal', 'react'],
          'newlines-between': 'always',

          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
];
