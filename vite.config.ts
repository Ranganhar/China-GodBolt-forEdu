import Tov from './presets'
import { defineConfig } from 'vite'
export default defineConfig({
  plugins: [Tov()],
  optimizeDeps: {
    include: ['vue3-beautiful-chat']
  }
})
