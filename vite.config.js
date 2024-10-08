import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // ลบ external ออกถ้าไม่จำเป็น
    }
  },
  resolve: {
    alias: {
      '@': '/src',  // ตรวจสอบเส้นทาง alias
    }
  },
  assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png']  // ตรวจสอบ assets
})
