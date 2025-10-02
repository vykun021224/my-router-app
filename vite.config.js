import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    // ép chỉ dùng React trong node_modules của project hiện tại
    alias: {
      react: path.resolve(__dirname, 'node_modules/react'),
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
    },
    // nếu có import ngoài ý muốn -> vẫn chỉ 1 bản React
    dedupe: ['react', 'react-dom'],
  },
  server: {
    // chặn import file ra ngoài thư mục dự án
    fs: { strict: true, allow: ['.'] },
  },
})
