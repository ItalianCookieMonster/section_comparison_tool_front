// vitest.config.ts
import { defineConfig } from 'vitest/config';
import path from 'path';
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./tests/setupTests.ts'],
        include: ['tests/**/*.test.{js,ts,jsx,tsx}'],
        coverage: {
            reporter: ['text', 'json', 'html'],
            exclude: ['tests', 'node_modules']
        },
    },

    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
})