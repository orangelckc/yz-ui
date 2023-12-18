import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        'pinia',
      ],
      dts: './src/types/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
        filepath: './src/types/.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
      ],
      dts: './src/types/components.d.ts',
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    open: true,
    host: '0.0.0.0',
    cors: true,
  },
})
