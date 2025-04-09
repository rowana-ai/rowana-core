module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    node: true,
    es2021: true,
    jest: true, // Add this if you use Jest for testing
  },
  parserOptions: {
    ecmaVersion: 12, // or higher (e.g., 2021)
    sourceType: 'module', // Allows for the use of imports
    project: './tsconfig.json', // Point to your tsconfig.json for type-aware linting
  },
  rules: {
    // Add custom rules or override defaults here
    // Example:
    // '@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],
    // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
  ignorePatterns: [
    'node_modules/',
    'dist/',
    '.eslintrc.js', // Don't lint the linter config itself
    'jest.config.js', // Don't lint Jest config
  ],
};
