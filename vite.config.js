import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' // (o el plugin que uses: react, etc.)

export default defineConfig({
  plugins: [vue()],
  base: '/mis_gastos_app_json/',
})