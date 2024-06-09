import twConfig from "ui-kit/tailwind.config"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/ui-kit/dist/awesome.js"
  ],
  theme: {
    extend: twConfig.theme.extend
  },
  safelist: twConfig.safelist
}

