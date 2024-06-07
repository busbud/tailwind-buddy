import tailwindConfig from "awesome/tailwind.config.js";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/awesome/dist/awesome.js"],
  theme: {
    extend: {
      ...tailwindConfig.theme.extend
    }
  },
  safelist: tailwindConfig.safelist
};
