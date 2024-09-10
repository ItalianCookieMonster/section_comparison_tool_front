// vitest.config.ts
import { defineConfig } from 'vitest/config';
import path from 'path';
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
    },
    
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
})