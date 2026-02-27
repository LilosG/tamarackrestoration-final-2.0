export default [
  {
    ignores: ['dist/**', '.astro/**', 'node_modules/**', 'src/**'],
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
];
