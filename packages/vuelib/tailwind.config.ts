import { generateSafeList } from '@busbud/tailwind-buddy';
import { buttonVariants, screens } from "./src/components/Button/Button.variants"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: generateSafeList([buttonVariants], screens)
}

