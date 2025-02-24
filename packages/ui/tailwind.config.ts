import { screens } from "./src/tailwind-buddy-interface";
import { buttonVariants } from "./src/components/Button/Button.variants";
import { labelVariants } from "./src/components/Label/Label.variants";
import { generateSafeList } from "@busbud/tailwind-buddy";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: screens,
    },
  },
  safelist: generateSafeList([labelVariants, buttonVariants], screens),
};