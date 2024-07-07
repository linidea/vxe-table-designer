import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        port: 8000,
        open: true,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@store': path.resolve(__dirname, './src/store'),
            '@view': path.resolve(__dirname, './src/view'),
            '@components': path.resolve(__dirname, './src/components'),
        },
    },
})
