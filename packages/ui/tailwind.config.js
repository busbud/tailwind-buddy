import { labelVariants } from "./src/components/Label/Label.variants"
import { generateSafeList } from "tailwind-classes-authority"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  safelist: generateSafeList([
    labelVariants
  ])
};
