import type { Config } from "tailwindcss";
import tailwindConfig from "ui-kit/tailwind.config";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/ui-kit/dist/uikit.js",
  ],
  theme: tailwindConfig.theme,
  // safelist: tailwindConfig.safelist,
} satisfies Config;
