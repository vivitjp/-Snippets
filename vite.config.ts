import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
      // CPU負荷軽減のため監視周期を下げる
      interval: 1000, // default: 100
      // binaryInterval: 1500, // default: 300
    },
  },
})
