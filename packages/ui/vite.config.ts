import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "path";

export default defineConfig({
  plugins: [react(), dts({ rollupTypes: true })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: ["./src/index.ts"],
      name: "awesome",
      // the proper extensions will be added
      fileName: "awesome",
    },
    rollupOptions: {
      external: ["react", "react-dom", "fs", "path"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          path: "path",
          fs: "fs",
        },
      },
    },
  }
});
