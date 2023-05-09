/** @type {import('tailwindcss').Config} */
/* eslint-env node */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
    fontFamily: {
      sans: ["General Sans", "sans-serif"],
      mono: ["Fragment Mono", "monospace"],
    },
  },
  plugins: [],
};
