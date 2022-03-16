import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//配置vite按需引入
import styleImport, { VantResolve } from 'vite-plugin-style-import';

export default defineConfig({
  resolve:{
    alias:{
      "@":"./src"
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/style/globalVar.scss";',
      }
    }
  },
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()],
    }),
  ],
})

