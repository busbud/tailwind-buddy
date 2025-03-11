import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import * as path from "node:path";
import { copyFileSync } from "node:fs";

export default defineConfig({
  plugins: [ dts({
    "rollupTypes": true,
    afterBuild: () => {
      copyFileSync("dist/main.d.ts", "dist/main.d.cts");
    },
  }) ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: [ "./src/main.ts" ],
      name: "tailwindbuddy",
      fileName: "tailwindbuddy",
      formats: [ "es", "umd" ]
    },
    rollupOptions: {
      external: [ "fs", "path" ],
      output: {
        globals: {
          path: "path",
          fs: "fs"
        },
      },
    },
  }
});
