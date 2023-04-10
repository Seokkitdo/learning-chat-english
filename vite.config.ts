import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      $stores: path.resolve('./src/stores'),
      $utils: path.resolve('./src/utils'),
      $types: path.resolve('./src/types'),
      $components: path.resolve('./src/components'),
      $routes: path.resolve('./src/routes'),
      $auth: path.resolve('./src/auth')
    }
  },
  plugins: [svelte()],
  server: {
    cors: false,
    host: '0.0.0.0',
    port: 5500,
    hmr: {
      protocol: 'ws'
    },
    watch: {
      usePolling: true
    }
  },
  preview: {
    port: 5500
  }
})
