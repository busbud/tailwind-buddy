import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tailwind Buddy",
  base: "/tailwind-buddy/",
  description:
    "Tailwind Buddy: Your Friendly Helper for Composing Tailwind Classes, SSR friendly and responsive variants 🎨",
  themeConfig: {
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Documentation", link: "/pages/why" },
    ],

    sidebar: [
      {
        text: "Documentation",
        items: [
          { text: "Why?", link: "/pages/why" },
          { text: "Setup", link: "/pages/setup" },
          { text: "Usage", link: "/pages/usage" },
          { text: "Working with Slots", link: "/pages/slots" },
          { text: "Compound Variants", link: "/pages/compound-variants" },
          { text: "Responsive Variants", link: "/pages/responsive-variants" },
          { text: "extraPerformanceDisabled", link: "/pages/performance" },
          {
            text: "Tailwind Autocomplete in VSCode (Optional)",
            link: "/pages/vscode",
          },
          { text: "Benchmarks", link: "/pages/benchmarks" },
          { text: "Contributing", link: "/pages/contributing" },
          { text: "Local development", link: "/pages/local-development" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/busbud/tailwind-buddy" },
    ],
  },
});
