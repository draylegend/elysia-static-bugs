import eslint from '@eslint/js';
import nx from '@nx/eslint-plugin';
import angular from 'angular-eslint';
import perfectionist from 'eslint-plugin-perfectionist';
import unusedImports from 'eslint-plugin-unused-imports';
import { config, configs } from 'typescript-eslint';

export default config(
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  perfectionist.configs['recommended-natural'],
  { ignores: ['**/dist'] },
  {
    extends: [
      eslint.configs.recommended,
      ...configs.recommended,
      ...configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    files: ['**/*.ts', '**/*.js'],
    plugins: { 'unused-imports': unusedImports },
    rules: {
      '@angular-eslint/component-class-suffix': [
        'error',
        { suffixes: ['Feature'] },
      ],
      '@angular-eslint/prefer-on-push-component-change-detection': 'error',
      '@nx/enforce-module-boundaries': [
        'error',
        {
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
          depConstraints: [{ onlyDependOnLibsWithTags: ['*'], sourceTag: '*' }],
          enforceBuildableLibDependency: true,
        },
      ],
      '@typescript-eslint/no-unused-expressions': [
        'error',
        { allowShortCircuit: true, allowTernary: true },
      ],
      'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          vars: 'all',
          varsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    rules: {
      '@angular-eslint/template/attributes-order': [
        'error',
        { alphabetical: true },
      ],
    },
  },
);
