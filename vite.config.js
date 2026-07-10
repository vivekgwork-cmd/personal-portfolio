import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'

export default defineConfig({
    plugins: [
        react(),
        imagetools({
            include: /^[^?]+\.(heic|heif|avif|jpe?g|png|tiff?|webp|gif)(\?.*)?$/i,
        }),
    ],
    server: {
        hmr: {
            host: 'localhost',
            protocol: 'ws',
        },
    }
})
