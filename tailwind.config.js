/** @type {import('tailwindcss').Config} */
import prelinePlugin from "preline/plugin";
export default {
  content: [
    "./index.html",
    "./node_modules/preline/preline.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [prelinePlugin],
};
