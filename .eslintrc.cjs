module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:tailwindcss/recommended",
    "next/core-web-vitals",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
};
