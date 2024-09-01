import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // 开发阶段启用源码映射：https://uniapp.dcloud.net.cn/tutorial/migration-to-vue3.html#需主动开启-sourcemap
    sourcemap: process.env.NODE_ENV === 'development',
  },
  plugins: [
    uni(),
    AutoImport({
      // 记得在tsconfig文件中添加 auto-import.d.ts
      //自动import 导入
      imports: ['vue', 'vue-router', 'uni-app', 'pinia'],
    }),
  ],
})
