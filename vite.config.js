import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    publicDir: 'photography-images',
    server: {
        hmr: {
            host: 'localhost',
            protocol: 'ws',
        },
    }
})
