// vite.config.ts
import { defineConfig } from "file:///Users/florentgiraud/dev/opensource/tailwind-buddy/node_modules/.pnpm/vite@5.3.1_@types+node@20.14.3/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/florentgiraud/dev/opensource/tailwind-buddy/node_modules/.pnpm/vite-plugin-dts@3.9.1_@types+node@20.14.3_typescript@5.4.5_vite@5.3.1/node_modules/vite-plugin-dts/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "/Users/florentgiraud/dev/opensource/tailwind-buddy/packages/core";
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
      name: "tailwindbuddy",
      // the proper extensions will be added
      fileName: "tailwindbuddy"
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZmxvcmVudGdpcmF1ZC9kZXYvb3BlbnNvdXJjZS90YWlsd2luZC1idWRkeS9wYWNrYWdlcy9jb3JlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvZmxvcmVudGdpcmF1ZC9kZXYvb3BlbnNvdXJjZS90YWlsd2luZC1idWRkeS9wYWNrYWdlcy9jb3JlL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9mbG9yZW50Z2lyYXVkL2Rldi9vcGVuc291cmNlL3RhaWx3aW5kLWJ1ZGR5L3BhY2thZ2VzL2NvcmUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IGR0cyBmcm9tIFwidml0ZS1wbHVnaW4tZHRzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbZHRzKHsgXCJyb2xsdXBUeXBlc1wiOiB0cnVlfSldLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxuICAgIH0sXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICAvLyBDb3VsZCBhbHNvIGJlIGEgZGljdGlvbmFyeSBvciBhcnJheSBvZiBtdWx0aXBsZSBlbnRyeSBwb2ludHNcbiAgICAgIGVudHJ5OiBbXCIuL3NyYy9tYWluLnRzXCJdLFxuICAgICAgbmFtZTogXCJ0YWlsd2luZGJ1ZGR5XCIsXG4gICAgICAvLyB0aGUgcHJvcGVyIGV4dGVuc2lvbnMgd2lsbCBiZSBhZGRlZFxuICAgICAgZmlsZU5hbWU6IFwidGFpbHdpbmRidWRkeVwiLFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFtcImZzXCIsIFwicGF0aFwiXSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgcGF0aDogXCJwYXRoXCIsXG4gICAgICAgICAgZnM6IFwiZnNcIlxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBa1gsU0FBUyxvQkFBb0I7QUFDL1ksT0FBTyxTQUFTO0FBQ2hCLE9BQU8sVUFBVTtBQUZqQixJQUFNLG1DQUFtQztBQUl6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsSUFBSSxFQUFFLGVBQWUsS0FBSSxDQUFDLENBQUM7QUFBQSxFQUNyQyxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxLQUFLO0FBQUE7QUFBQSxNQUVILE9BQU8sQ0FBQyxlQUFlO0FBQUEsTUFDdkIsTUFBTTtBQUFBO0FBQUEsTUFFTixVQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDLE1BQU0sTUFBTTtBQUFBLE1BQ3ZCLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxVQUNQLE1BQU07QUFBQSxVQUNOLElBQUk7QUFBQSxRQUNOO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
