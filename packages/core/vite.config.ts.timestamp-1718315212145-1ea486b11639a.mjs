// vite.config.ts
import { defineConfig } from "file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/vite@5.2.12_@types+node@20.14.2_terser@5.31.1/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/vite-plugin-dts@3.9.1_@types+node@20.14.2_rollup@4.18.0_typescript@5.4.5_vite@5.2.12_@types+node@20.14.2_terser@5.31.1_/node_modules/vite-plugin-dts/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "/Users/florentgiraud/dev/busbud/tailwind-classes-authority/packages/core";
var vite_config_default = defineConfig({
  plugins: [dts({ "rollupTypes": true })],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: ["./src/main.ts"],
      name: "tca",
      // the proper extensions will be added
      fileName: "tca"
    },
    rollupOptions: {
      external: ["fs", "path"],
      output: {
        globals: {
          path: "path",
          fs: "fs"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZmxvcmVudGdpcmF1ZC9kZXYvYnVzYnVkL3RhaWx3aW5kLWNsYXNzZXMtYXV0aG9yaXR5L3BhY2thZ2VzL2NvcmVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9mbG9yZW50Z2lyYXVkL2Rldi9idXNidWQvdGFpbHdpbmQtY2xhc3Nlcy1hdXRob3JpdHkvcGFja2FnZXMvY29yZS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvZmxvcmVudGdpcmF1ZC9kZXYvYnVzYnVkL3RhaWx3aW5kLWNsYXNzZXMtYXV0aG9yaXR5L3BhY2thZ2VzL2NvcmUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IGR0cyBmcm9tIFwidml0ZS1wbHVnaW4tZHRzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbZHRzKHsgXCJyb2xsdXBUeXBlc1wiOiB0cnVlfSldLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxuICAgIH0sXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICAvLyBDb3VsZCBhbHNvIGJlIGEgZGljdGlvbmFyeSBvciBhcnJheSBvZiBtdWx0aXBsZSBlbnRyeSBwb2ludHNcbiAgICAgIGVudHJ5OiBbXCIuL3NyYy9tYWluLnRzXCJdLFxuICAgICAgbmFtZTogXCJ0Y2FcIixcbiAgICAgIC8vIHRoZSBwcm9wZXIgZXh0ZW5zaW9ucyB3aWxsIGJlIGFkZGVkXG4gICAgICBmaWxlTmFtZTogXCJ0Y2FcIixcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbXCJmc1wiLCBcInBhdGhcIl0sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgIHBhdGg6IFwicGF0aFwiLFxuICAgICAgICAgIGZzOiBcImZzXCJcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfVxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTBZLFNBQVMsb0JBQW9CO0FBQ3ZhLE9BQU8sU0FBUztBQUNoQixPQUFPLFVBQVU7QUFGakIsSUFBTSxtQ0FBbUM7QUFJekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLElBQUksRUFBRSxlQUFlLEtBQUksQ0FBQyxDQUFDO0FBQUEsRUFDckMsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLElBQ3RDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBO0FBQUEsTUFFSCxPQUFPLENBQUMsZUFBZTtBQUFBLE1BQ3ZCLE1BQU07QUFBQTtBQUFBLE1BRU4sVUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxNQUFNLE1BQU07QUFBQSxNQUN2QixRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsVUFDUCxNQUFNO0FBQUEsVUFDTixJQUFJO0FBQUEsUUFDTjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
