import { labelVariants } from "./src/components/Label/Label.variants";
import { generateSafeList } from "tailwind-classes-authority"

export type Screens = "lg" | "xl"
export const screens: Screens[] = ["lg", "xl"]

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens
    }
  },
  safelist: generateSafeList([labelVariants], screens)
};
