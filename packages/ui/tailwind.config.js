import { generateAllSafeList } from "./src/utils/tailwind-utils"
import { labelVariants } from "./src/components/Label/Label.variants"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  safelist: generateAllSafeList([
    labelVariants.variants
  ]),
  theme: {
    extend: {
      screens: {
        sm: "600px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
      },
    }
  }
};
