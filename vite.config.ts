import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      $store: path.resolve("./src/lib/stores"),
      $utils: path.resolve("./src/lib/utils"),
      $types: path.resolve("./src/lib/types"),
      $components: path.resolve("./src/lib/components"),
      $routes: path.resolve("./src/routes"),
    },
  },
  plugins: [svelte()],
  server: {
    cors: false,
    host: "0.0.0.0",
    port: 5000,
    hmr: {
      protocol: "ws",
    },
    watch: {
      usePolling: true,
    },
  },
  preview: {
    port: 5000,
  },
});
