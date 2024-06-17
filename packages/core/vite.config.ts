import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import path from "path";

export default defineConfig({
  plugins: [dts({ "rollupTypes": true})],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: ["./src/main.ts"],
      name: "tailwindbuddy",
      // the proper extensions will be added
      fileName: "tailwindbuddy",
    },
    rollupOptions: {
      external: ["fs", "path"],
      output: {
        globals: {
          path: "path",
          fs: "fs"
        },
      },
    },
  }
});
