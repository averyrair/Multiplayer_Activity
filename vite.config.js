import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { DiscordProxy } from '@robojs/patch'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), DiscordProxy.Vite()],
  server: {
    allowedHosts: true
  }
})