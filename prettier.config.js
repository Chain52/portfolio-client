/**
 * @typedef {import('prettier').Config} Config
 */

/** @type {Config} */
export default {
  trailingComma: 'none',
  useTabs: false,
  tabWidth: 2,
  bracketSpacing: true,
  arrowParens: 'always',
  semi: true,
  singleQuote: true,
  plugins: ['prettier-plugin-tailwindcss']
};