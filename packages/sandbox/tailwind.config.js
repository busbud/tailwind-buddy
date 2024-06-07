import twConfig from "ui-kit/tailwind.config.js"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/ui-kit/dist/awesome.js"
  ],
  safelist: twConfig.safelist,
}

