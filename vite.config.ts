import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteImagemin from 'vite-plugin-imagemin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      // GIF optimization
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      // PNG optimization - lossless compression
      optipng: {
        optimizationLevel: 7,
      },
      // JPEG/JPG optimization - high quality compression
      mozjpeg: {
        quality: 90, // 90% quality maintains excellent visual quality
      },
      // SVG optimization
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
      // WEBP optimization
      webp: {
        quality: 90,
      },
    }),
  ],
  server: {
    proxy: {
      '/api': 'http://localhost:5000'
    }
  },
  build: {
    outDir: 'dist'
  }

})