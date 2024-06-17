import { labelVariants } from "./src/components/Label/Label.variants";
import { generateSafeList } from "tailwind-classes-authority"

export type Screens = "sm" | "md" | "lg" | "xl"
export const screens: Screens[] = ["sm", "md", "lg", "xl"]

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
